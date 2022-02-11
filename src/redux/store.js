import { createStore,applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import {composeWithDevTools }from 'redux-devtools-extension'

const store=createStore(rootReducer,applyMiddleware(thunkMiddleware));
export default store;