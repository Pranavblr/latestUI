import {NAVIGATE_BETWEEN_FORMS} from '../constants/actiontypes';

let initialState = {
  currentFormType:0
}
export default function orgSetUpMultiPartFormNavigationReducer(state=initialState,action){
    switch(action.type){
      case NAVIGATE_BETWEEN_FORMS:
          return {
              ...state,
              currentFormType:action.formType
          }
        default:
            return state
    }
}