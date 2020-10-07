import { combineReducers } from 'redux'
import err from './err'
import reddit from './reddit'
import todos from './todos'

const todoApp = combineReducers({
  err,
  reddit,
  todos,
})

export default todoApp
