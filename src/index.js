import 'normalize.css'
import 'suitcss-base/lib/base.css'
import './index.css'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import App from './components/app'
import initialState from './utils/initialState'
import injectTapEventPlugin from 'react-tap-event-plugin'
import logger from 'redux-logger'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import ReactDOM from 'react-dom'
import rootReducer from './state'
import thunk from 'redux-thunk'

injectTapEventPlugin()

const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger({collapsed: true, duration: true}))
}

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
