import { ADD_TODO, TOGGLE_TODO } from '../actions/types'

const todos = (state = [], action) => {
  let newTodos
  switch (action.type) {
    case ADD_TODO:
      newTodos = state.slice()
      newTodos.push({
        text: action.text,
        completed: false,
      })

      return newTodos
    case TOGGLE_TODO:
      newTodos = state.slice()
      newTodos[action.index].completed = !newTodos[action.index].completed

      return newTodos
    default:
      return state
  }
}

export default todos
