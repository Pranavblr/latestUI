import {NAVIGATE_BETWEEN_FORMS} from '../constants/actiontypes';

let initialState = {
  currentFormType:0,
  currentFormPage:'orgCAHomePage'
}
export default function orgSetUpMultiPartFormNavigationReducer(state=initialState,action){
  
    switch(action.type){
      case NAVIGATE_BETWEEN_FORMS:
          return {
              ...state,
              currentFormType:action.formType,
              currentFormPage:action.page
          }
        default:
            return state
    }
}