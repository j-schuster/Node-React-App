import { ADD_SERVICE, GET_ALL_SERVICES, GET_SERVICE } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type){
       case ADD_SERVICE:
       const service =  action.addedService.data;
        return {
        	...state,
           	service
        }
        case GET_ALL_SERVICES :
        const services = action.services.data;
        	return {
        		...state,
        		services
        	}
        case GET_SERVICE : 
        const singleService = action.service.data;
            return {
                singleService
            }    
        default:
            return state;
    } 
};