import { ADD_TODO, TOGGLE_TODO } from './types'

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
})

export const toggleTodo = (index) => {
  return { type: TOGGLE_TODO, index }
}
