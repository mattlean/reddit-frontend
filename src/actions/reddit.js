import { ADD_SUBREDDIT } from './types'
import { setErr } from '../actions'

export const addSubreddit = ({ name, data }) => ({
  type: ADD_SUBREDDIT,
  name,
  data,
})

export const fetchAPI = (subreddit) => (dispatch) => {
  fetch(`https://www.reddit.com/r/${subreddit}.json?jsonp=foo`)
    .then((res) => res.text())
    .then((text) => {
      const regExp = /(^\/\*\*\/foo\()|(\)$)/g
      const match = text.match(regExp)
      if (match) {
        const subredditData = JSON.parse(text.replace(regExp, ''))
        // find top post in data (filter through stickied)
        // if all posts are stickied just use first stickied post
        // throw err if there are no posts
        dispatch(addSubreddit({ name: subreddit, data: subredditData }))
        console.log(subredditData.data.children[0])
      } else {
        throw new Error(
          'Invalid response format from reddit API or no subreddit was found.'
        )
      }
    })
    .catch((err) => dispatch(setErr(err.message)))
  // catch thrown err
}
