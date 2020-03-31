import {DEAFULT_ORG_CA_STATE,ORG_CA_REQUEST_STARTS,
    ORG_CA_REQUEST_SUCCESS,ORG_CA_REQUEST_FAILED,CLOSE_CA_ERROR_POPUP,
    FETCH_ORG_CA_INPUT_DETAILS,FETCH_ORG_CA_FILE_DATA,GET_SELECTED_CHECK_BOX,
    GET_CA_BY_ID,ADD_NEW_CA,GET_CA_BY_ID_STARTS} from '../../constants/actiontypes';

let initialState={
    loading:false,
    CAinputDetails:{
            name: "",
            fqdn: "",
            enrollId: "",
            enrollSecret: "",
            ipAddress: "",
            serverPort: '',
            enableTLSAuth: false,
            enableClientTLSAuth: false,
            enableOpTLSAuth: false,
            enableOpClientTLSAuth: false,
            rootCA: null,
            opServicePort: '',
            tlsOpsRootCertId: null,
            adminCert:"",
            adminKey:"",
            serverCert:"",
            serverKey:"",
            tlsServerCert:"",
            tlsServerKey:""
    },
    orgCARequestResponse:'',
    errorResponse:'',
    getCAByidresponseLoading:false,
    getCAByIdresponse:''
}
export default function orgCAreducer(state=initialState,action){
    switch(action.type){
        case DEAFULT_ORG_CA_STATE:
            return {
                ...state,
                CAinputDetails:{
                    name: "",
                    fqdn: "",
                    enrollId: "",
                    enrollSecret: "",
                    ipAddress: "",
                    serverPort: '',
                    enableTLSAuth: false,
                    enableClientTLSAuth: false,
                    enableOpTLSAuth: false,
                    enableOpClientTLSAuth: false,
                    rootCA: null,
                    opServicePort: '',
                    tlsOpsRootCertId: null,
                    adminCert:"",
                    adminKey:"",
                    serverCert:"",
                    serverKey:"",
                    tlsServerCert:"",
                    tlsServerKey:""
            },
            orgCARequestResponse:''
                
            }
        case FETCH_ORG_CA_INPUT_DETAILS:
            return {
                ...state,
                CAinputDetails:{
                    ...state.CAinputDetails,
                    [action.inputObject.key]:action.inputObject.value
                }
            }
        case ADD_NEW_CA:
            return {
                ...state,
                orgCARequestResponse:''
            }
        case FETCH_ORG_CA_FILE_DATA:
            return {
                ...state,
                CAinputDetails:{
                    ...state.CAinputDetails,
                    [action.inputFile.key]:action.inputFile.value
                }
            }
        case GET_SELECTED_CHECK_BOX:
            return {
                ...state,
                CAinputDetails:{
                    ...state.CAinputDetails,
                    [action.inputObject.key]:action.inputObject.value
                }
            }
        case ORG_CA_REQUEST_STARTS:
            return {
                ...state,
                loading:true
            }
        case ORG_CA_REQUEST_SUCCESS:
            return {
                ...state,
                loading:false,
                orgCARequestResponse:action.response
            }
        case ORG_CA_REQUEST_FAILED:
            return {
                ...state,
                errorResponse:action.error,
                loading:false
            }
        case CLOSE_CA_ERROR_POPUP:
            return {
                ...state,
                errorResponse:''
            }
        case GET_CA_BY_ID_STARTS:
            return {
                ...state,
                getCAByidresponseLoading:true
            }
        case GET_CA_BY_ID:
            return {
                ...state,
                getCAByidresponseLoading:false,
                getCAByIdresponse:action.res
            }

        default:
            return state 
    }
}