import React from 'react'
import Feed from './containers/Feed'
import './App.css'

function App() {
  return (
    <>
      <h1>Top subreddit Post Tracker</h1>
      <p>
        Get the current top post from a subreddit. Keep track of up to 10
        subreddits. No reddit account necessary!
      </p>
      <Feed />
    </>
  )
}

export default App
