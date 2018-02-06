import { GET_JOB_POST, GET_ALL_JOBS, CONTACT_USER, DELETE_USER_CREATED_JOB } from '../actions/types';



export default function(state = {}, action) {
    switch(action.type){
        case GET_JOB_POST :
        const job = action.job.data
        	return {
        		job
        	}	
        case GET_ALL_JOBS :
        const jobs = action.jobs.data
        	return {
        		jobs: jobs
        	}	
         case CONTACT_USER :
         const contacted = action.contactUser.data
            return {
                contacted
            } 
        case DELETE_USER_CREATED_JOB :
        const deletedJobUser = action.deletedUserCreatedJob.data
        const allJobs = [...state.jobs]
        const removedJobUser = allJobs.filter((job) => job._id !== deletedJobUser._id)
            return {
                jobs: removedJobUser
            }
        default:
            return state;
    } 
};