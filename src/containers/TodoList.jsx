import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { toggleTodo } from '../actions'

let TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, i) => (
      <Todo key={i} {...todo} onClick={() => onTodoClick(i)} />
    ))}
  </ul>
)

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (i) => dispatch(toggleTodo(i)),
})

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoList
