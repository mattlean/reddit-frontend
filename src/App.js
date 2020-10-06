import React from 'react'
import Feed from './containers/Feed'
import './App.css'
import store from './store'
import { addTodo, toggleTodo } from './actions'
import TodoList from './containers/TodoList'
import AddTodo from './containers/AddTodo'

// console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(1))
// unsubscribe()

function App() {
  return (
    <>
      <Feed />
      <TodoList />
      <AddTodo />
    </>
  )
}

export default App
