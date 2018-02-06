import { FETCH_USER, UPDATE_USER, SAVE_JOB, DELETE_SAVED_JOB } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type){
        case FETCH_USER :
            return action.user.data || false;
        case UPDATE_USER :
        const user = action.updatedUser.data
            return user
        case SAVE_JOB:
        const saved = [...state.savedJobs]
        const job = action.savedJob.data
        const index = saved.findIndex(j => j.id === job.id)
        const items = index !== -1 ? saved : [...state.savedJobs, job]      
            return {
                ...state,
                savedJobs: items
            }
        case DELETE_SAVED_JOB :
        const currentSaved = [...state.savedJobs]
        const deletedSavedJob = action.deletedSavedJob.data
        const newSavedJobs = currentSaved.filter((el) => el.id !== deletedSavedJob)
        
            return {
                ...state,
                savedJobs: newSavedJobs
            }        
        default:
            return state;
    } 
};