import { UPDATE_SEARCH_FIELD } from './types'

/**
 * Update search field input
 * @param {string} input Input from search field
 * @return {Object} UPDATE_SEARCH_FIELD action
 */
export const updateSearchField = (input) => ({
  type: UPDATE_SEARCH_FIELD,
  input,
})
