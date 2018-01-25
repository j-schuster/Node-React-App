import { FETCH_USER, UPDATE_USER, SAVE_JOB } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type){
        case FETCH_USER :
            return action.user.data || false;
        case UPDATE_USER :
        const user = action.updatedUser.data
            return user
        case SAVE_JOB:
        const job = action.savedJob.data
            return {
                ...state,
                savedJobs: [...state.savedJobs, job]
            }    
        default:
            return state;
    } 
};