import { GET_USER_INFO } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type){
       case GET_USER_INFO :
       const userInfo = action.userInfo.data
       	return {
       		userInfo
       	}
        default:
            return state;
    } 
};