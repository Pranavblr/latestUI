import {ADD_NEW_ORDERER,FETCH_ORG_ORDERER_INPUT_DETAILS,
    SELECTED_ORDERER_FILE,ORDERER_SELECTED_CHECKBOX,
    GET_ORG_ORDERER_BY_ID_STARTS,GET_ORG_ORDERER_BY_ID_SUCCESS,
    CREATE_ORDERER_REQUEST_STARTS,CREATE_ORDERER_REQUEST_SUCCESS,
    CREATE_ORDERER_REQUEST_FAILED,CLOSE_ORG_ODERER_ERROR_POPUP} from '../../../constants/actiontypes';

let initialState={
    loading:false,
    ordererInputDetails:{
        name: "",
        fqdn: "",
        nodeType: 0,
        enrollId: "",
        enrollSecret: "",
        ipAddress: "",
        gossipPort: '',
        enableTLSAuth: false,
        enableClientTLSAuth: false,
        enableOpTLSAuth: false,
        enableOpClientTLSAuth: false,
        eventHubPort: '',
        opServicePort: '',
        adminCert:"",
        adminKey:"",
        serverCert:"",
        serverKey:"",
        tlsServerCert:"",
        tlsServerKey:"",
        tlsClientCert:"",
        tlsClientKey:"",
        tlsOpsServerKey:"",
        tlsServerRootCAId: "",
        tlsClientRootCAId: "",
        tlsOpsServerRootCAId: "",
        tlsOpsClientRootCAId: ""
    },
    requestResponse:'',
    createOrgOrderererrorMessage:'',
    creatOrgOrdererLoading:false,
    getOrderbyIdLoading:false,
    getOrdererbyIdResponse:''
}
export default function orgOrdererReducer(state=initialState,action){
    switch(action.type){
        case ADD_NEW_ORDERER:
            return {
                ...state,
                requestResponse:''
            }
        case FETCH_ORG_ORDERER_INPUT_DETAILS:
            return{
                ...state,
                ordererInputDetails:{
                    ...state.ordererInputDetails,
                    [action.inputObject.key]:action.inputObject.value
                }
               }
        case SELECTED_ORDERER_FILE:
            return {
                ...state,
                ordererInputDetails:{
                    ...state.ordererInputDetails,
                    [action.inputFileObject.key]:action.inputFileObject.value  
                }
            }
        case ORDERER_SELECTED_CHECKBOX:
            return {
                ...state,
                ordererInputDetails:{
                    ...state.ordererInputDetails,
                    [action.inputObject.key]:action.inputObject.value  
                }
            }
        case GET_ORG_ORDERER_BY_ID_STARTS:
            return {
                ...state,
                getOrderbyIdLoading:true
            }
        case GET_ORG_ORDERER_BY_ID_SUCCESS:
            return {
                ...state,
                getOrdererbyIdResponse:action.response,
                getOrderbyIdLoading:false
            }
        case CREATE_ORDERER_REQUEST_STARTS:
            return {
                ...state,
                creatOrgOrdererLoading:true
            }
        case CREATE_ORDERER_REQUEST_SUCCESS:
            return {
                ...state,
                requestResponse:action.response,
                creatOrgOrdererLoading:false
            }
        case CREATE_ORDERER_REQUEST_FAILED:
            return {
                ...state,
                creatOrgOrdererLoading:false,
                createOrgOrderererrorMessage:action.error
            }
        case CLOSE_ORG_ODERER_ERROR_POPUP:{
            return {
                ...state,
                createOrgOrderererrorMessage:''
            }
        }
        default:
            return state
    }
}