import { SET_ERR } from '../actions/types'

const err = (state = '', action) => {
  switch (action.type) {
    case SET_ERR:
      return action.message
    default:
      return state
  }
}

export default err
