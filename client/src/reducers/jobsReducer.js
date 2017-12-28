import { GET_JOB_POST, GET_ALL_JOBS } from '../actions/types';



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
        		jobs
        	}	
        default:
            return state;
    } 
};