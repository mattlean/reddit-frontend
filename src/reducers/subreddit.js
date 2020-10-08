import { ADD_SUBREDDIT } from '../actions/types'

const subreddit = (state = [], action) => {
  switch (action.type) {
    case ADD_SUBREDDIT:
      const newState = state.slice()
      newState.push({
        name: action.name,
        data: action.data,
      })

      return newState
    default:
      return state
  }
}

export default subreddit
