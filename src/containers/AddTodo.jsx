import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  const [text, setText] = useState('')

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodo(text))
        }}
      >
        Add
      </button>
    </>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
