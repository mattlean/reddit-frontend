import React, { useState } from 'react'
import { fetchAPI, setErr } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const Feed = () => {
  const [searchField, setSearchField] = useState('')
  const errMessage = useSelector((state) => state.err)
  const topPosts = useSelector((state) => state.topPosts)
  const dispatch = useDispatch()

  const searchHandler = (e) => {
    e.preventDefault()
    dispatch(setErr())
    dispatch(fetchAPI(searchField))
  }

  return (
    <>
      {errMessage}
      <form>
        <input
          type="text"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
        <button onClick={searchHandler}>Add</button>
      </form>
      <ul>
        {topPosts.map((p) => (
          <li key={p.id}>
            <h1>{p.title}</h1>
            <p>{`r/${p.subreddit}`}</p>
            <p>{p.score}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Feed
