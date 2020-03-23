import {DEFAULT_REQUEST_RECEIVED_STATE,REQUEST_RECEIVED_CALL_STARTS,
    REQUEST_RECEIVED_CALL_SUCCESS,REQUEST_RECEIVED_CALL_FAILED,
    REQUEST_ACCEPT_OR_REJECT_STARTS,REQUEST_ACCEPT_OR_REJECT_SUCCESS} from '../../constants/actiontypes';
let initialState={
    loading:false,
    requestResponse:[],
    errorResponse:{},
    acceptorRejectLoading:false,
    acceptorRejectRequestResponse:'',
}
export default function roleRequestReceivedReducer(state=initialState,action){
   switch(action.type){
       case DEFAULT_REQUEST_RECEIVED_STATE:
           return initialState
       case  REQUEST_RECEIVED_CALL_STARTS:
           return {
               ...state,
               loading:true
           }
        case REQUEST_RECEIVED_CALL_SUCCESS:
            return{
                ...state,
                loading:false,
                requestResponse:action.response
            }
        case REQUEST_RECEIVED_CALL_FAILED:
            return{
                ...state,
                loading:false,
                errorResponse:action.error
            }
        case REQUEST_ACCEPT_OR_REJECT_STARTS:
            return {
                ...state,
             acceptorRejectLoading:true
            }
        case REQUEST_ACCEPT_OR_REJECT_SUCCESS:
            return{
                ...state,
                acceptorRejectLoading:false,
                acceptorRejectRequestResponse:action.response
            }
        default:
            return state
   }
}