import { combineReducers } from 'redux'
import userReducer from './userReducer'
import jobsReducer from './jobsReducer'
import servicesReducer from './servicesReducer'

export default combineReducers({
    user: userReducer,
    jobs: jobsReducer,
    services: servicesReducer
})

