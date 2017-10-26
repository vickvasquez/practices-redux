/* eslint-env browser */

// Agregar la siguiente linea para corregir el.
// error que arroaja linter sobre document is not defined.

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render( <App />, document.getElementById( 'root' ) )
registerServiceWorker()
