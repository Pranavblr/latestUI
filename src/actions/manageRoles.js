import {DEFAULT_MANAGE_ROLES_STATE,GET_SELECTED_ROLE,
    MANAGE_ROLES_REQUEST_STARTS,MANAGE_ROLES_REQUEST_SUCCESS,
    MANGAGE_ROLES_REQUEST_FAILED,OPEN_MANAGE_ROLES_POP_UP,CLOSE_MANAGE_ROLES_POP_UP
} from '../constants/actiontypes';
import AbstractHttpService from '../services/AbstractHttpService';
import config from '../config/apiUrl';

export const defaultManageRolesState = ()=>{
  return {
      type:DEFAULT_MANAGE_ROLES_STATE
  }
}
export const openManageRolesPopUp = ()=>{
    return {
        type:OPEN_MANAGE_ROLES_POP_UP
    }
}
export const closeManageRolesPopUp = ()=>{
    return {
        type:CLOSE_MANAGE_ROLES_POP_UP
    }
}
export const getSelectedRole = (selectedRoleId)=>{
  return {
      type:GET_SELECTED_ROLE,
      selectedRoleId
  }
}
export const saveManageRoleRequestStarts =()=>{
   return {
       type:MANAGE_ROLES_REQUEST_STARTS
   }
}
export const saveManageRoleRequestSuccess = (res)=>{
  return {
   type:MANAGE_ROLES_REQUEST_SUCCESS,
   res
  }
}
export const saveManageRoleRequestFailed = (error)=>{
   return {
       type:MANGAGE_ROLES_REQUEST_FAILED,
       error
   }
}
export const saveManageRolesCall = (selectedRole)=>{
  const manageRoelsUrl = config.config.manageUserRoles+selectedRole;
 return(dispatch)=>{
     dispatch(saveManageRoleRequestStarts())
     AbstractHttpService.generic_Api_call("get",manageRoelsUrl,{})
     .then((res)=>{
         if(res.status===200){
             localStorage.setItem('roletoken',res.data.roletoken);
            dispatch(saveManageRoleRequestSuccess(res.data)) 
         }else{
             throw new Error('Failed to switch the role.')
         }
         console.log('manage-roles-api',res)
     })
     .catch(error=>{
        dispatch(saveManageRoleRequestFailed(error.message))
         console.log('error',error)
     })
 }
}