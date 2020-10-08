import { combineReducers } from 'redux'
import err from './err'
import subreddit from './subreddit'
import topPosts from './topPosts'
import todos from './todos'

const todoApp = combineReducers({
  err,
  subreddit,
  topPosts,
  todos,
})

export default todoApp
