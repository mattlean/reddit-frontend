import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchRedditAPI } from '../actions'

const Feed = ({ dispatch }) => {
  useEffect(() => {
    dispatch(fetchRedditAPI())
  }, [])

  return (
    <ul>
      <li>Hi I'm a feed</li>
    </ul>
  )
}

export default connect()(Feed)
