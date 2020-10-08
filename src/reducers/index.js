import { combineReducers } from 'redux'
import err from './err'
import searchField from './searchField'
import subreddit from './subreddit'
import topPosts from './topPosts'
import todos from './todos'

const todoApp = combineReducers({
  err,
  searchField,
  subreddit,
  topPosts,
  todos,
})

export default todoApp
