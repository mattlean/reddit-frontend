import { ADD_TOP_POST } from '../actions/types'

const topPosts = (state = { age: [], feed: [] }, action) => {
  switch (action.type) {
    case ADD_TOP_POST:
      const newFeed = state.feed.slice()
      const newAge = state.age.slice()

      if (action.postToRemove) {
        // Remove top post to be replaced in feed
        newFeed.splice(action.postToRemove.id, 1)

        // Remove top post to be replaced from age
        const newAgeIndex = newAge.findIndex(action.postToRemove.id)
        if (newAgeIndex > -1) newAge.splice(newAgeIndex, 1)
      }

      if (state.age.length > 9) {
        // Remove the oldest subreddit top post when queue has reached max capacity
        const removeID = newAge.pop()
        newFeed.splice(
          newFeed.findIndex((p) => p.id === removeID),
          1
        )
      }

      // Update feed
      newFeed.push({
        id: action.data.data.id,
        score: action.data.data.score,
        subreddit: action.data.data.subreddit,
        title: action.data.data.title,
        link: `https://reddit.com/${action.data.data.permalink}`,
      })

      newFeed.sort((a, b) => {
        return b.score - a.score
      })

      // Update age
      newAge.unshift(action.data.data.id)

      return {
        age: newAge,
        feed: newFeed,
      }
    default:
      return state
  }
}

export default topPosts
