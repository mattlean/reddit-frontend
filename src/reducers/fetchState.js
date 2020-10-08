import { SET_FETCH } from '../actions/types'

const fetchState = (state = false, action) => {
  switch (action.type) {
    case SET_FETCH:
      return action.state
    default:
      return state
  }
}

export default fetchState
