import {combineReducers} from 'redux'
import bookReducer from './book/bookReducer'

const rootReducer=combineReducers({
   books:bookReducer,
})
export default rootReducer;