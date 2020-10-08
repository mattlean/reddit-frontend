import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAPI, setErr, updateSearchField } from '../actions'

const SearchField = () => {
  const inputText = useSelector((state) => state.searchField)
  const numPosts = useSelector((state) => state.topPosts.age.length)
  const errMessage = useSelector((state) => state.err)
  const dispatch = useDispatch()

  const searchHandler = (e) => {
    e.preventDefault()
    if (errMessage) dispatch(setErr())
    dispatch(fetchAPI(inputText))
  }

  let err
  if (errMessage)
    err = (
      <p className="bg-red-100 border border-red-600 mt-4 py-2 px-4 rounded text-red-600">
        {errMessage}
      </p>
    )

  let placeholderTxt
  if (numPosts < 1) placeholderTxt = 'Type a subreddit name here...'
  else placeholderTxt = 'Type another subreddit name here...'

  return (
    <>
      <form className="flex">
        <input
          type="text"
          placeholder={placeholderTxt}
          value={inputText}
          onChange={(e) => dispatch(updateSearchField(e.target.value))}
          className="border border-gray-300 flex-1 mr-2 py-2 px-4 rounded text-xl"
        />
        <button
          onClick={searchHandler}
          className="bg-indigo-500 hover:bg-indigo-700 py-2 px-4 rounded text-white text-xl"
        >
          Add Post
        </button>
      </form>
      {err}
    </>
  )
}

export default SearchField
