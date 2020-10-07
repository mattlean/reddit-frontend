import { SET_ERR } from './types'

export const setErr = (message = '') => ({
  type: SET_ERR,
  message,
})
