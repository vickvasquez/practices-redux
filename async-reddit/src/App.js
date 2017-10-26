import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers/'
import App from './containers'

const midleware = [ thunk ]

midleware.push( ...createLogger )

const store = createStore( reducer, applyMiddleware( ...midleware ) )

const Reddit = () => (
    <Provider store={ store } >
        <App />
    </Provider>
)

export default Reddit
