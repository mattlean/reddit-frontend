import { combineReducers } from 'redux'
import err from './err'
import searchField from './searchField'
import subreddit from './subreddit'
import topPosts from './topPosts'

const rootReducer = combineReducers({
  err,
  searchField,
  subreddit,
  topPosts,
})

export default rootReducer
