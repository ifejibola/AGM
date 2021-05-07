// Start up point for the front-end/client side

import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

//Redux config 
import { Provider } from 'react-redux'
// import store from './store';
import axios from 'axios'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

// Routes
import MainRouter from './MainRouter'

const axiosInstance = axios.create({
    baseURL: '/api'
})

//
const defaultState = {
    appName: 'AGMEETING',
}

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(axiosInstance)
    } else {
        //enable additional 
        return applyMiddleware(thunk.withExtraArgument(axiosInstance), createLogger())
    }
}
const store = createStore(reducers, window.INITIAL_STATE, composeWithDevTools(getMiddleware()));

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(MainRouter)}</div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))
