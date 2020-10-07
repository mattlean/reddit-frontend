import React, { useState } from 'react'
import { fetchAPI, setErr } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const Feed = () => {
  const [searchField, setSearchField] = useState('')
  const errMessage = useSelector((state) => state.err)
  const result = useSelector((state) => state.reddit)
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
      <ul></ul>
    </>
  )
}

export default Feed
