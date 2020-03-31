import {NAVIGATE_BETWEEN_FORMS} from '../constants/actiontypes';

export const navigateBetweenFormType = (formType)=>{
    
    return {
        type:NAVIGATE_BETWEEN_FORMS,
        formType
    }
}