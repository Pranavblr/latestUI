import {FETCH_USER_DETAILS,DEFAULT_SIGNUP_STATE,
    SIGN_UP_REQUEST_STARTS,SIGN_UP_REQUEST_SUCCESS,SIGN_UP_REQUEST_FAILED,
    FETCH_USER_ORG_DETAILS} from '../constants/actiontypes';
import config  from '../config/apiUrl';
import AbstractHttpService from '../services/AbstractHttpService';

export const defaultSignUpstate=()=>{
   return {
       type:DEFAULT_SIGNUP_STATE
   }
}
export const fetchUserDetails=(userData)=>{
    return {
        type:FETCH_USER_DETAILS,
        userData
    }
}
export const fetchOrgDetails=(name,existing)=>{
    return {
        type:FETCH_USER_ORG_DETAILS,
        name,
        existing
    }
}
export const signUpUserStarts = ()=>{
    return {
        type:SIGN_UP_REQUEST_STARTS
    }
}
export const signUpUserSuccess = (response)=>{
    return {
        type:SIGN_UP_REQUEST_SUCCESS,
        response
    }
}
export const signUpUserFailed = (error)=>{
    return {
        type:SIGN_UP_REQUEST_FAILED,
        error
    }
}
export const signUpUser=(data)=>{
    let signUpUrl = `${config.config.signUpNewUser}`;
    return(dispatch)=>{
        dispatch(signUpUserStarts())
        AbstractHttpService.generic_Api_call("post",signUpUrl,data)
        .then((res)=>{
            if(res.status===200||res.status===201){
                dispatch(signUpUserSuccess(res.data))
            }else if(res.status===409){
                throw new Error('User already exists.')
            }else{
                throw new Error('Not able to store data.')
            }
        })
        .catch(error=>{
            dispatch(signUpUserFailed(error))
        })
    }
}