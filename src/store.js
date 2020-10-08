import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './reducers'

let preloadedState
const localStorageState = localStorage.getItem('redux')
if (localStorageState) preloadedState = JSON.parse(localStorageState)

const store = createStore(
  reducers,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
