import { SET_FETCH } from './types'

/**
 * Set fetch state
 * @param {boolean} state State of fetch progress
 */
export const setFetch = (state) => ({
  type: SET_FETCH,
  state,
})
