import { ADD_TOP_POST } from '../actions/types'

const topPosts = (state = [], action) => {
  let newState
  switch (action.type) {
    case ADD_TOP_POST:
      newState = state.slice()

      if (
        typeof action.indexToRemove === 'number' &&
        action.indexToRemove > -1
      ) {
        // Remove top post to be replaced in feed
        newState.splice(action.indexToRemove, 1)
      }

      newState.push({
        id: action.data.data.id,
        score: action.data.data.score,
        subreddit: action.data.data.subreddit,
        title: action.data.data.title,
      })

      newState.sort((a, b) => {
        return b.score - a.score
      })

      return newState
    default:
      return state
  }
}

export default topPosts
