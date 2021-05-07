// Combine all our reducers 
import { combineReducers } from 'redux'
import home from './home';
import usersReducer from './userReducer'
import auth from './auth'
import errorReducer from './errorReducer'

export default combineReducers({
    users: usersReducer,
    auth: auth,
    error: errorReducer,
})