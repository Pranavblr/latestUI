import {DEFAULT_ACTIVE_USERS_STATE,GET_ACTIVE_USERS_LIST_STARTS,
    GET_ACTIVE_USERS_LIST_SUCCESS,GET_ACTIVE_USERS_LIST_FAILED} from '../constants/actiontypes';

    let initialState={
        loading:false,
        activeUsersList:[],
        errorMessage:''
    }
export default function activeUsersReducer(state=initialState,action){
    switch(action.type){
        case DEFAULT_ACTIVE_USERS_STATE:
            return initialState
        case GET_ACTIVE_USERS_LIST_STARTS:
            return {
                ...state,
                loading:true
            }
        case GET_ACTIVE_USERS_LIST_SUCCESS:
            return {
                ...state,
                loading:false,
                activeUsersList:action.response
            }
        case GET_ACTIVE_USERS_LIST_FAILED:
            return {
                ...state,
                loading:false
            }
        default:
            return state
    }
}