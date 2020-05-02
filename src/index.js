import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//import './index.css'
import 'semantic-ui-css/semantic.min.css'

const jsx = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render( jsx, document.getElementById('root') )