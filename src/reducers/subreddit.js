import { ADD_SUBREDDIT } from '../actions/types'

const subreddit = (state = [], action) => {
  let newState
  switch (action.type) {
    case ADD_SUBREDDIT:
      newState = state.slice()
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
