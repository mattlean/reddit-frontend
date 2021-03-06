import React, { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { errVariants } from '../variants'
import { fetchAPI, setErr, setFetch, updateSearchField } from '../actions'
import { usePrevVal } from '../hooks'

/**
 * Search field and button
 */
const SearchField = () => {
  const errMessage = useSelector((state) => state.err)
  const fetchState = useSelector((state) => state.fetchState)
  const inputText = useSelector((state) => state.searchField)
  const inputRef = useRef(null)
  const numPosts = useSelector((state) => state.topPosts.age.length)
  const prevFetchState = usePrevVal(fetchState)
  const dispatch = useDispatch()

  useEffect(() => {
    // Focus on search field first on page load
    if (inputRef.current) inputRef.current.focus()
  }, [])

  useEffect(() => {
    if (inputRef.current && prevFetchState && !fetchState) {
      // Focus search field input again if a new err occurs
      inputRef.current.focus()
    }
  }, [fetchState])

  const searchHandler = (e) => {
    e.preventDefault()
    if (errMessage) dispatch(setErr())
    dispatch(setFetch(true))
    dispatch(fetchAPI(inputText))
  }

  let err
  if (errMessage)
    err = (
      <motion.p
        animate="visible"
        exit="hidden"
        initial="hidden"
        variants={errVariants}
        className="bg-red-100 border border-red-600 mt-4 py-2 px-4 rounded text-red-600"
      >
        {errMessage}
      </motion.p>
    )

  let placeholderTxt
  if (numPosts < 1) placeholderTxt = 'Type a subreddit name here...'
  else placeholderTxt = 'Type another subreddit name here...'

  let inputCSSClasses =
    'border border-gray-300 flex-1 mr-2 py-2 px-4 rounded text-xl'
  let btnCSSClasses =
    'bg-indigo-500 hover:bg-indigo-700 py-2 px-4 rounded text-white text-xl transition-colors'
  if (fetchState) {
    inputCSSClasses += ' cursor-not-allowed'
    btnCSSClasses += ' opacity-50 cursor-not-allowed'
  }

  return (
    <>
      <form className="flex justify-evenly">
        <input
          ref={inputRef}
          type="text"
          disabled={fetchState}
          placeholder={placeholderTxt}
          value={inputText}
          onChange={(e) => dispatch(updateSearchField(e.target.value))}
          className={inputCSSClasses}
        />
        <button
          disabled={fetchState}
          onClick={searchHandler}
          className={btnCSSClasses}
        >
          Add Post
        </button>
      </form>
      <AnimatePresence>{err}</AnimatePresence>
    </>
  )
}

export default SearchField
