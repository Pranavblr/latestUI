import {DEFAULT_REQUEST_SENT_STATE,REQUEST_SENT_CALL_STARTS,
    REQUEST_SENT_CALL_SUCCESS,REQUEST_SENT_CALL_FAILED,
    UNAUTHORIZED_API_REQUEST} from '../../constants/actiontypes';

let initialState={
   loading:false,
   requestResponse:[],
   errorResponse:{},
   tokenExpired:false
}
export default function roleRequestSentReducer(state=initialState,action){
  switch(action.type){
      case DEFAULT_REQUEST_SENT_STATE:
          return initialState;
      case REQUEST_SENT_CALL_STARTS:
          return {
              ...state,
              tokenExpired:false,
              loading:true
          }
      case REQUEST_SENT_CALL_SUCCESS:
          return{
              ...state,
              loading:false,
              tokenExpired:false,
              requestResponse:action.response
          }
      case REQUEST_SENT_CALL_FAILED:
          return {
              ...state,
              loading:false,
              tokenExpired:false,
              errorResponse:action.error
          }
      case UNAUTHORIZED_API_REQUEST:
          return {
              ...state,
              tokenExpired:true
          }
    default:
        return state
  }
}