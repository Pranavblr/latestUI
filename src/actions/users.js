import {DEFAULT_ACTIVE_USERS_STATE,GET_ACTIVE_USERS_LIST_STARTS,
    GET_ACTIVE_USERS_LIST_SUCCESS,GET_ACTIVE_USERS_LIST_FAILED,UNAUTHORIZED_API_REQUEST} from '../constants/actiontypes';
import config  from '../config/apiUrl';
import AbstractHttpService from '../services/AbstractHttpService';

export const defaultUsersState = ()=>{
    return {
        type:DEFAULT_ACTIVE_USERS_STATE
    }
}
export const getActiveUsersListRequestStarts =()=>{
   return {
       type:GET_ACTIVE_USERS_LIST_STARTS
   }
}
export const getActiveUsersListRequestSuccess = (response)=>{
   return {
       type:GET_ACTIVE_USERS_LIST_SUCCESS,
       response
   }
}
export const getActiveUsersListRequestFailed = ()=>{
  return {
      type:GET_ACTIVE_USERS_LIST_FAILED
  }
}
export const getAllActiveUsers =()=>{
   let uid = localStorage.getItem('user-id')?localStorage.getItem('user-id'):'';
   let activeUsersListUrl = config.config.activeUsers+uid+"/activeUsers";
   return(dispatch)=>{
       dispatch(getActiveUsersListRequestStarts())
    AbstractHttpService.generic_Api_call("get",activeUsersListUrl,{}).
    then((res)=>{
        if(res.status===200){
           dispatch(getActiveUsersListRequestSuccess(res.data))
        }else if(res.status===401||res.status===403){
            dispatch({
                type:UNAUTHORIZED_API_REQUEST,
            })
        }
    })
    .catch(error=>{
        console.log('error',error)
    })
   }
  
}
