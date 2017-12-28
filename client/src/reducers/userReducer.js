import { FETCH_USER, UPDATE_USER } from '../actions/types';

export default function(state = null, action) {
    switch(action.type){
        case FETCH_USER :
            return action.user.data || false;
        case UPDATE_USER :
        const final = { ...state, ...action.updatedUser.data}
        	return final   
        
        default:
            return state;
    } 
};