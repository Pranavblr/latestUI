import {GET_SELECTED_SIDENAV_ITEM,
    GET_SELECTED_SUBMENU_ITEM} from '../constants/actiontypes';

let initialState={
    selectedItem:'',
    subMenu:''
}
export default function navigationReducer(state=initialState,action){
   switch(action.type){
       case GET_SELECTED_SIDENAV_ITEM:
           return{
               ...state,
               selectedItem:action.selectedItem
           }
        case GET_SELECTED_SUBMENU_ITEM:
            return {
                ...state,
                selectedItem:action.parentMenu,
                subMenu:action.subMenu
            }
           default:
               return state
   }
}