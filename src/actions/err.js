import { SET_ERR } from './types'

/**
 * Set error message
 * @param {string} message Error message
 * @return {Object} SET_ERR action
 */
export const setErr = (message = '') => ({
  type: SET_ERR,
  message,
})
