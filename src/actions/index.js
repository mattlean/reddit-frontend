import { ADD_TODO, TOGGLE_TODO } from './types'

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
})

export const toggleTodo = (index) => {
  return { type: TOGGLE_TODO, index }
}

export const fetchRedditAPI = () => (dispatch) => {
  fetch('https://www.reddit.com/r/Denver.json?jsonp=foo')
    .then((res) => res.text())
    .then((text) => {
      // const match = text.match(/\?\((.*)\);/)
      const regExp = /(^\/\*\*\/foo\()|(\)$)/g
      const match = text.match(regExp)
      if (match) {
        const data = JSON.parse(text.replace(regExp, ''))
        console.log(data)
        dispatch(addTodo('i was called late'))
      } else {
        throw new Error('Invalid response format from reddit API')
      }
    })
}
