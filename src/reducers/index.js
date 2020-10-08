import { combineReducers } from 'redux'
import err from './err'
import fetchState from './fetchState'
import searchField from './searchField'
import subreddit from './subreddit'
import topPosts from './topPosts'

const rootReducer = combineReducers({
  err,
  fetchState,
  searchField,
  subreddit,
  topPosts,
})

export default rootReducer
