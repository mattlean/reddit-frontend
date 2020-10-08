import React from 'react'
import { fetchAPI, setErr, updateSearchField } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

/**
 * Feed of top subreddit posts
 */
const Feed = () => {
  const searchField = useSelector((state) => state.searchField)
  const errMessage = useSelector((state) => state.err)
  const feed = useSelector((state) => state.topPosts.feed)
  const dispatch = useDispatch()

  const searchHandler = (e) => {
    e.preventDefault()
    if (errMessage) dispatch(setErr())
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
      {errMessage}
      <form>
        <input
          type="text"
          value={searchField}
          onChange={(e) => dispatch(updateSearchField(e.target.value))}
        />
        <button onClick={searchHandler}>Add</button>
      </form>
      {content}
    </>
  )
}

export default Feed
