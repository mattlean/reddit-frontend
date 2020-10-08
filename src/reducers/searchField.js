import { ADD_TOP_POST, UPDATE_SEARCH_FIELD } from '../actions/types'

const initialState = ''

const searchField = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOP_POST:
      return initialState // Reset search field when successful top post was added
    case UPDATE_SEARCH_FIELD:
      return action.input
    default:
      return state
  }
}

export default searchField
