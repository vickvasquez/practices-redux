import React from 'react'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './containers'

const store = createStore(reducer, applyMiddleware(thunk, createLogger()))

const AppGif = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default AppGif
