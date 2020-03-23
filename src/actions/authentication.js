import * as JWT from 'jsonwebtoken';

import {REQUEST_FOR_SIGN_IN,
    REQUEST_SIGNIN_SUCCESS,REQUEST_SIGNIN_FAILED,DEFAULT_SIGNIN_STATE} from '../constants/actiontypes';
import config  from '../config/apiUrl';
import AbstractHttpService from '../services/AbstractHttpService';


export const authenticateDefaultState = ()=>{
   return {
       type:DEFAULT_SIGNIN_STATE
   }
}
export const authenticateUserStarts = ()=>{
   return {
       type:REQUEST_FOR_SIGN_IN
   }
}
export const authenticateUserSuccess = (data)=>{
    return {
        type:REQUEST_SIGNIN_SUCCESS,
        data
    }
}
export const authenticateUserFails = (error)=>{
    return {
        type:REQUEST_SIGNIN_FAILED,
        error
    }
}
export const getUserinfo = ()=>{
    let userInfoUrl = config.config.userInformation;
    AbstractHttpService.generic_Api_call("get",userInfoUrl,{})
    .then((res)=>{
        if(res.status===200){
            localStorage.setItem('firstName',res.data.given_name)
            localStorage.setItem('LastName',res.data.family_name) 
        }
    })
    .catch(error=>{
        console.log(error)
    })
}
export const getOrgDetails = (response)=>{
   let decodedCurrentOrg = JWT.decode(response.data.currentUserRole);
   let currentOrg = decodedCurrentOrg.org;
   let getOrgDetailsUrl = config.config.getOrgDetails+currentOrg;
   AbstractHttpService.generic_Api_call("get",getOrgDetailsUrl,{})
     .then((res)=>{
       if(res&&res.status===200){
           if(res&&res.data&&res.data.length>0){
               localStorage.setItem('current-orgName',res.data[0].name);
               localStorage.setItem('currentOrg_id',res.data[0]._id);
           }
       }
     })
     .catch(error=>{
         console.log('the error')
     })

   console.log('current-org',decodedCurrentOrg);
}

export const authenticateuser=(code)=>{
  let authenticationUrl = `${config.config.authenticate}?code=${code}`;
  return (dispatch)=>{
      dispatch(authenticateUserStarts())
      AbstractHttpService.login("GET",authenticationUrl,code)
         .then((res)=>{
             if(res&&res.status===200){
                 if(res&&res.data&&res.data.userDetails&&res.data.userDetails.userRoleList){
                     localStorage.setItem('current-userRoleList',JSON.stringify(res.data.userDetails.userRoleList));
                 }
                 localStorage.setItem('access_token',res.data.access_token?res.data.access_token:'');
                 localStorage.setItem('role_token',res.data.currentUserRole?res.data.currentUserRole:'');
                 localStorage.setItem('user-id',res.data.uid?res.data.uid:'');
                 getOrgDetails(res)
                 getUserinfo();
                //  if(res.data&&res.data.userDetails&&res.data.userDetails.userRoleRequests!=null&&res.data.userDetails.userRoleRequests.length>0){
                //   var userDetails = res.data.userDetails.userRoleRequests[0].request;
                //   localStorage.setItem('firstName',userDetails.firstname)
                //   localStorage.setItem('LastName',userDetails.lastname)
                //  }
                  dispatch(authenticateUserSuccess(res.data))
             }
         }).catch(error=>{
             dispatch(authenticateUserFails(error))
             console.log('authentication-error',error)
         })
  }
}
