import {DEFAULT_REQUEST_SENT_STATE,REQUEST_SENT_CALL_STARTS,
    REQUEST_SENT_CALL_SUCCESS,REQUEST_SENT_CALL_FAILED,
    UNAUTHORIZED_API_REQUEST} from '../../constants/actiontypes';
import config from '../../config/apiUrl';
import AbstractHttpService from '../../services/AbstractHttpService';

export const requestSentDefaultState = ()=>{
   return{
       type:DEFAULT_REQUEST_SENT_STATE
   }
}
export const getSentRequestCallStarts = ()=>{
    return{
        type:REQUEST_SENT_CALL_STARTS
    }
}
export const getSentRequestCallSuccess = (response)=>{
    return{
        type:REQUEST_SENT_CALL_SUCCESS,
        response
    }
}
export const getSentRequestCallFailed =(error)=>{
    return{
        type:REQUEST_SENT_CALL_FAILED,
        error
    }
}
export const unAuthorizedRequest = (error)=>{
    return {
        type:UNAUTHORIZED_API_REQUEST,
        error
    }
}
export const getAllRequestSentByUser = ()=>{
 let uid = localStorage.getItem('user-id')?localStorage.getItem('user-id'):'';
 let requestSentUrl = config.config.requestSentUser+uid;
 return(dispatch)=>{
     dispatch(getSentRequestCallStarts())
     AbstractHttpService.generic_Api_call("get",requestSentUrl,{})
      .then((res)=>{
          if(res.status===200){
              dispatch(getSentRequestCallSuccess(res.data))
          }else if(res.status===401||res.status===403){
              dispatch(unAuthorizedRequest(res.data))
          }
          else{
              throw new Error('Failed to fetch data');
          }
      })
      .catch(error=>{
          dispatch(getSentRequestCallFailed(error))
          console.log(error)
      })
 }
}
