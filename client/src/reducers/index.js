import { combineReducers } from 'redux'
import userReducer from './userReducer'
import jobsReducer from './jobsReducer'
import servicesReducer from './servicesReducer'
import usersReducer from './users'

export default combineReducers({
    user: userReducer,
    jobs: jobsReducer,
    services: servicesReducer,
    users: usersReducer
})

