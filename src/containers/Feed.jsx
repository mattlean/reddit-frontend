import React, { useState } from 'react'
import { fetchAPI, setErr } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const Feed = () => {
  const [searchField, setSearchField] = useState('')
  const errMessage = useSelector((state) => state.err)
  const feed = useSelector((state) => state.topPosts.feed)
  const dispatch = useDispatch()

  const searchHandler = (e) => {
    e.preventDefault()
    dispatch(setErr())
    dispatch(fetchAPI(searchField))
  }

  let content
  if (feed.length > 0) {
    content = (
      <ul>
        {feed.map((p) => (
          <li key={p.id}>
            <a href={p.link} rel="noopener noreferrer" target="_blank">
              <h1>{p.title}</h1>
              <p>{`r/${p.subreddit}`}</p>
              <p>{p.score}</p>
            </a>
          </li>
        ))}
      </ul>
    )
  } else {
    content = (
      <p>To get started, type in a subreddit name in the text bar above!</p>
    )
  }

  return (
    <>
      <h1>Top subreddit Post Tracker</h1>
      <p>
        Get the current top post from a subreddit. Keep track of up to 10
        subreddits. No reddit account necessary!
      </p>
      {errMessage}
      <form>
        <input
          type="text"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
        <button onClick={searchHandler}>Add</button>
      </form>
      {content}
    </>
  )
}

export default Feed
