import {DEFAULT_REQUEST_RECEIVED_STATE,REQUEST_RECEIVED_CALL_STARTS,
    REQUEST_RECEIVED_CALL_SUCCESS,REQUEST_RECEIVED_CALL_FAILED,
    REQUEST_ACCEPT_OR_REJECT_STARTS,REQUEST_ACCEPT_OR_REJECT_SUCCESS} from '../../constants/actiontypes';

import config from '../../config/apiUrl';
import AbstractHttpService from '../../services/AbstractHttpService';

export const requestReceivedDefaultState=()=>{
  return {
      type:DEFAULT_REQUEST_RECEIVED_STATE
  }
}
export const requestReceivedCallStarts = ()=>{
   return {
       type:REQUEST_RECEIVED_CALL_STARTS
   }
}
export const requestReceivedCallSuccess =(response)=>{
   return{
       type:REQUEST_RECEIVED_CALL_SUCCESS,
       response
   }
}
export const requesReceivedCallFailed = (error)=>{
   return {
       type:REQUEST_RECEIVED_CALL_FAILED,
       error
   }
}
export const getAllRequestReceivedByUser = ()=>{
    let uid = localStorage.getItem('user-id')?localStorage.getItem('user-id'):'';
    let requestSentUrl = `${config.config.requestSentUser}${uid}/rolerequests`;
 return(dispatch)=>{
     dispatch(requestReceivedCallStarts())
     AbstractHttpService.generic_Api_call("get",requestSentUrl,{})
      .then((res)=>{
          if(res.status===200){
              dispatch(requestReceivedCallSuccess(res.data))
          }else{
              throw new Error('Failed to fetch data')
          }
      })
      .catch(error=>{
          dispatch(requesReceivedCallFailed(error))
          console.log(error)
      })
 }
}
export const acceptOrRejectRequestStarts = ()=>{
   return {
       type:REQUEST_ACCEPT_OR_REJECT_STARTS
   }
}
export const acceptOrRejectRequestSuccess = (response)=>{
    return {
        type:REQUEST_ACCEPT_OR_REJECT_SUCCESS,
        response
    }
}
export const acceptOrRejectRequest=(data)=>{
     let acceptRejectUrl =`${config.config.requestSentUser}rolerequest`;
     return (dispatch)=>{
         dispatch(acceptOrRejectRequestStarts())
         AbstractHttpService.generic_Api_call("put",acceptRejectUrl,data).
         then((res)=>{
          dispatch(acceptOrRejectRequestSuccess(res.data))
         }).
         catch(error=>{
             console.log('error',error)
         })
     }
}