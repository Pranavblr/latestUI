import {GET_SELECTED_SIDENAV_ITEM,GET_SELECTED_SUBMENU_ITEM} from '../constants/actiontypes';

export const getSelectedSideNav = (selectedItem)=>{
    return {
        type:GET_SELECTED_SIDENAV_ITEM,
        selectedItem
    }
}
export const getSelectedSubmenuItem = (parentMenu,subMenu)=>{
    return {
        type:GET_SELECTED_SUBMENU_ITEM,
        parentMenu,
        subMenu
     }
}