import { ADD_TOP_POST, ADD_SUBREDDIT } from './types'
import { setErr } from '../actions'
import store from '../store'

/**
 * Add subreddit response data
 * @param {string} name subreddit name from search field
 * @param {Object} data subreddit response data
 * @return {Object} ADD_SUBREDDIT action
 */
export const addSubreddit = (name, data) => ({
  type: ADD_SUBREDDIT,
  name,
  data,
})

/**
 * Add new top post.
 * Remove existing top post if it's from the same subreddit.
 * @param {Object} data Post data from reddit API
 * @param {Object} postToRemove Data for post to remove
 * @return {Object} ADD_TOP_POST action
 */
export const addTopPost = (data, postToRemove) => ({
  type: ADD_TOP_POST,
  data,
  postToRemove,
})

/**
 * Fetch subreddit data from reddit API.
 * Handle asynchronous call with redux-thunk.
 * @param {string} subreddit subreddit ID
 * @return {Function} Thunk that performs fetch request to reddit API
 */
export const fetchAPI = (subreddit) => (dispatch) => {
  fetch(`https://www.reddit.com/r/${subreddit}.json?jsonp=foo`)
    .then((res) => {
      if (res.ok) return res.text()
      throw new Error('The API responded with an error in the response.')
    })
    .then((text) => {
      // Remove JSONP wrapper in a very hacky way
      const regExp = /(^\/\*\*\/foo\()|(\)$)/g
      const match = text.match(regExp)
      if (match) {
        const subredditData = JSON.parse(text.replace(regExp, ''))

        // DEBUG: Store API res data for debugging purposes
        dispatch(addSubreddit(subreddit, subredditData))

        // Throw err if there are no posts
        if (subredditData.data.children < 1) {
          throw new Error('Subreddit has no posts.')
        }

        // Find top post in data (filter through stickied)
        let topPost

        for (let i = 0; i < subredditData.data.children.length; i += 1) {
          const currPost = subredditData.data.children[i]

          if (!currPost.data.stickied) {
            topPost = currPost
            break
          }
        }

        // If all posts are stickied, just use first stickied post
        if (!topPost) topPost = subredditData.data.children[0]

        // Find if post from this subreddit already exists
        let postAlreadyExists = false
        let postToRemove
        const { topPosts } = store.getState()
        const { feed } = topPosts
        for (let i = 0; i < feed.length; i += 1) {
          const p = feed[i]
          if (p.subreddit === topPost.data.subreddit) {
            // Find out if the new post is the different than the current post
            if (p.id === topPost.data.id) {
              postAlreadyExists = true
            } else {
              postToRemove = { i, id: p.id }
            }
            break
          }
        }

        if (postAlreadyExists) {
          dispatch(setErr('The new top post already exists in the feed.'))
        } else {
          dispatch(addTopPost(topPost, postToRemove))
        }
      } else {
        throw new Error(
          'Invalid response format from reddit API or no subreddit was found.'
        )
      }
    })
    .catch((err) => dispatch(setErr(err.message)))
}
