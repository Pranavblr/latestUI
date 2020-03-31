import * as JWT from 'jsonwebtoken';

import {REQUEST_FOR_SIGN_IN,
    REQUEST_SIGNIN_SUCCESS,REQUEST_SIGNIN_FAILED,DEFAULT_SIGNIN_STATE,
    UPDATE_NAME,FETCH_ORGNAME,SIGN_OUT_USER_SUCCESS} from '../constants/actiontypes';
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
    return(dispatch)=>{
        AbstractHttpService.generic_Api_call("get",userInfoUrl,{})
        .then((res)=>{
            if(res.status===200){
                dispatch({
                    type:UPDATE_NAME,
                    res
                })
                localStorage.setItem('firstName',res.data.given_name)
                localStorage.setItem('LastName',res.data.family_name) 
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
}
export const getOrgDetails = (response)=>{
   let decodedCurrentOrg = JWT.decode(response.data.currentUserRole);
   let currentOrg = decodedCurrentOrg.org;
   let getOrgDetailsUrl = config.config.getOrgDetails+currentOrg;
   return (dispatch)=>{
    AbstractHttpService.generic_Api_call("get",getOrgDetailsUrl,{})
    .then((res)=>{
      if(res&&res.status===200){
          if(res&&res.data&&res.data.length>0){
              dispatch({
                  type:FETCH_ORGNAME,
                  res
              })
              localStorage.setItem('current-orgName',res.data[0].name);
              localStorage.setItem('currentOrg_id',res.data[0]._id);
          }
      }
    })
    .catch(error=>{
        console.log('the error')
    })
   }
     

//    console.log('current-org',decodedCurrentOrg);
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
                 localStorage.setItem('roletoken',res.data.currentUserRole?res.data.currentUserRole:'');
                 localStorage.setItem('user-id',res.data.uid?res.data.uid:'');
                 if(res.data.currentUserRole!==null){
                   dispatch(getOrgDetails(res));
                   
                 }
                    dispatch(getUserinfo())
              
                    dispatch(authenticateUserSuccess(res.data))
                
                 
                //  if(res.data&&res.data.userDetails&&res.data.userDetails.userRoleRequests!=null&&res.data.userDetails.userRoleRequests.length>0){
                //   var userDetails = res.data.userDetails.userRoleRequests[0].request;
                //   localStorage.setItem('firstName',userDetails.firstname)
                //   localStorage.setItem('LastName',userDetails.lastname)
                //  }
                  
             }
         }).catch(error=>{
             dispatch(authenticateUserFails(error))
             console.log('authentication-error',error)
         })
  }
}
export const signOutUserSuceess = (res)=>{
    return {
        type:SIGN_OUT_USER_SUCCESS,
        res
    }
}
export const signOutUser = ()=>{
    let signOutUrl = config.config.signOut;
    return(dispatch)=>{
        AbstractHttpService.generic_Api_call("get",signOutUrl,{})
        .then((res)=>{
            
            dispatch(signOutUserSuceess(res.data))
           localStorage.clear();
        })
        .catch((error)=>{
            console.log('error is', error)
        })
    }
    
}
