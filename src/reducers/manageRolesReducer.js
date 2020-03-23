import {DEFAULT_MANAGE_ROLES_STATE,GET_SELECTED_ROLE,
    MANAGE_ROLES_REQUEST_STARTS,MANAGE_ROLES_REQUEST_SUCCESS,
    MANGAGE_ROLES_REQUEST_FAILED,OPEN_MANAGE_ROLES_POP_UP,CLOSE_MANAGE_ROLES_POP_UP
} from '../constants/actiontypes';

let initialState={
 loading:false,
 openManageRolesPopup:false,
 selectedUserId:'',
 requestResponse:''
}
export default function manageRolesReducer(state=initialState,action){
  switch(action.type){
      case DEFAULT_MANAGE_ROLES_STATE:
          return initialState
      case GET_SELECTED_ROLE:
          return {
              ...state,
              selectedUserId:action.selectedRoleId
          }
      case OPEN_MANAGE_ROLES_POP_UP:
          return {
              ...state,
              openManageRolesPopup:true
          }
      case CLOSE_MANAGE_ROLES_POP_UP:
          return {
              ...state,
              openManageRolesPopup:false,
              requestResponse:''
          }
      case MANAGE_ROLES_REQUEST_STARTS:
          return {
              ...state,
              loading:true
          }
      case MANAGE_ROLES_REQUEST_SUCCESS:
          return {
              ...state,
              loading:false,
              requestResponse:action.res
          }
      case MANGAGE_ROLES_REQUEST_FAILED:
          return {
              ...state,
              loading:false
          }
      default:
            return state
  }
}