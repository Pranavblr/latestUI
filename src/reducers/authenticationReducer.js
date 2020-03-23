import {REQUEST_FOR_SIGN_IN,
   REQUEST_SIGNIN_SUCCESS,REQUEST_SIGNIN_FAILED,DEFAULT_SIGNIN_STATE,
   RESET_AUTH_ERROR_POPUP} from '../constants/actiontypes';

let initialState={
  loading:false,
  signinResponse:{},
  errorMessage:'',
  authenticationDone:false,
}
export default function authenticationReducer(state=initialState,action){
   switch(action.type){
      case DEFAULT_SIGNIN_STATE:
         return initialState
      case REQUEST_FOR_SIGN_IN:
       return {
          ...state,
          loading:true
       }
       case REQUEST_SIGNIN_SUCCESS:
          return {
             ...state,
             signinResponse:action.data,
             authenticationDone:true
          }
       case REQUEST_SIGNIN_FAILED:
          return {
             ...state,
             errorMessage:action.error.message
          }
       case RESET_AUTH_ERROR_POPUP:
          return {
             ...state,
             errorMessage:''
          }
       default:
          return state
   }
}