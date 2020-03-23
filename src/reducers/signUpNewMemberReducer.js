import {FETCH_USER_DETAILS,DEFAULT_SIGNUP_STATE,
    SIGN_UP_REQUEST_STARTS,SIGN_UP_REQUEST_SUCCESS,SIGN_UP_REQUEST_FAILED,
    RESET_SIGNUP_ERROR_POPUP,FETCH_USER_ORG_DETAILS} from '../constants/actiontypes';

let initialState={
    userDetails:{
        email:localStorage.getItem('user-id')?localStorage.getItem('user-id'): "",
        lastname:localStorage.getItem('LastName')?localStorage.getItem('LastName'):"",
        firstname:localStorage.getItem('firstName')?localStorage.getItem('firstName'):"",
        role: 1,
        comments: "",
        company: "",
        city: "",
        jobtitle: "",
        state: "",
        country: "",
        Application: "",
        network: "",
        org: {
          name: "hongdt",
          exsisting: true
        },
        parentOrg: "hongdt"
    },
    loading:false,
    errorMessage:'',
    SignUpResponse:{},
    signUpDone:false,
   
}
export default function signUpNewMemberReducer(state=initialState,action){

    switch(action.type){
        case DEFAULT_SIGNUP_STATE:
            return initialState
        case FETCH_USER_DETAILS:
            return {
                ...state,
                userDetails:{
                    ...state.userDetails,
                   [action.userData.key]:action.userData.value
                }
            }
        case FETCH_USER_ORG_DETAILS:
            return {
                ...state,
                userDetails:{
                    ...state.userDetails,
                    org:{
                        name:action.name,
                        exsisting:action.existing
                    }
                 
                }
            }
        case SIGN_UP_REQUEST_STARTS:
            return{
                ...state,
                signUpDone:false,
                loading:true
            }
        case SIGN_UP_REQUEST_SUCCESS:
            return {
                ...state,
                loading:false,
                signUpDone:true,
                SignUpResponse:action.response
            }
        case SIGN_UP_REQUEST_FAILED:
            return {
                ...state,
                loading:false,
                signUpDone:false,
                errorMessage:action.error.message
            }
        case RESET_SIGNUP_ERROR_POPUP:
            return {
                ...state,
                loading:false,
                signUpDone:false,
                errorMessage:''
            }
            default:
                return state
    }
}