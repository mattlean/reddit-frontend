import React, { useEffect } from 'react'
import Feed from './containers/Feed'
import SearchField from './containers/SearchField'
import SpaceSnoo from './assets/space-snoo.png'
import './App.css'
import store from './store'

function App() {
  useEffect(() => {
    // Store latest Redux state in local storage to persist sessions
    const unsubscribe = store.subscribe(() => {
      const s = store.getState()
      localStorage.setItem(
        'redux',
        JSON.stringify({
          ...s,
          err: '',
          fetchState: false,
          searchField: '',
        })
      )
    })
    return () => unsubscribe()
  }, [])

  return (
    <main className="mx-auto my-5">
      <h1 className="font-semibold mb-6 text-5xl text-center">
        Top subreddit Post Tracker
      </h1>
      <img src={SpaceSnoo} alt="Space Snoo" className="mx-auto mb-6" />
      <p className="mb-8 text-center text-xl text-gray-700">
        Get the current top post from a&nbsp;subreddit.
        <br />
        Keep track of up to 10 subreddits. No reddit account is&nbsp;necessary!
      </p>
      <SearchField />
      <Feed />
    </main>
  )
}

export default App
