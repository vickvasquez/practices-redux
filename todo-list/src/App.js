import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/'
import App from './components/presentation/App'

let store = createStore(todoApp)

const TodoList = () => (
   <Provider store={store}>
    <App />
  </Provider>
)


export default TodoList