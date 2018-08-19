import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import './assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-datepicker/dist/react-datepicker.css'

import App from './App'
import configureStore from './store'
import registerServiceWorker from './helpers/registerServiceWorker'

const history = createHistory()
const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
