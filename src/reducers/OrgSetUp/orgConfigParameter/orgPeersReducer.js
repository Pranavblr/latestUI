import {ADD_NEW_PEER,FETCH_ORG_PEER_INPUT_DETAILS,
    SELECTED_PEER_FILE,GET_COUCH_DB_DATA,SELECTED_CHECKBOX_STATUS,
    CREATE_PEER_REQUEST_STARTS,CREATE_PEER_REQUEST_SUCCESS,
    CREATE_PEER_REQUEST_FAILED,GET_ORG_PEER_BY_ID_SUCCESS,GET_ORG_PEER_BY_ID_STARTS,
    CLOSE_ORG_PEER_ERROR_POPUP
} from '../../../constants/actiontypes';

let initialState={
    loading:false,
    peerInputDetails:{
        name: "",
        fqdn: "",
        nodeType: 1,
        enrollId: "",
        enrollSecret: "",
        ipAddress: "",
        gossipPort:"",
        enableTLSAuth: false,
        enableClientTLSAuth: false,
        enableOpTLSAuth: false,
        enableOpClientTLSAuth: false,
        eventHubPort: "",
        opServicePort: "",
        adminCert:"",
        adminKey:"",
        serverCert:"",
        serverKey:"",
        tlsServerCert:"",
        tlsServerKey:"",
        tlsClientCert:"",
        tlsClientKey:"",
        tlsOpsServerCert:"",
        tlsOpsServerKey:"",
        tlsServerRootCAId: "",
        tlsClientRootCAId: "",
        tlsOpsServerRootCAId: "",
        tlsOpsClientRootCAId: "",
        stateDB:{
            name: "",
            fqdn: "",
            port: '',
            dbUser: "",
            dbPassword: ""
        }
    },
    requestResponse:'',
    createOrgPeerLoading:false,
    createOrgPeerErrorMessage:"",
    getPeerByIdrequestStarts:false,
    getPeerByIdrequestResponse:''
}
export default function orgPeersReducer(state=initialState,action){
    
    switch(action.type){
       case ADD_NEW_PEER:
           return {
               ...state,
               requestResponse:''
           }
        case FETCH_ORG_PEER_INPUT_DETAILS:
            return {
                ...state,
                peerInputDetails:{
                       ...state.peerInputDetails,
                        [action.inputObject.key]:action.inputObject.value
                    
                }
             }
        case SELECTED_PEER_FILE:
            return {
                ...state,
                peerInputDetails:{
                    ...state.peerInputDetails,
                   [action.inputFileObject.key]:action.inputFileObject.value
                }
            }
        case GET_COUCH_DB_DATA:
            return {
                ...state,
                peerInputDetails:{
                    ...state.peerInputDetails,
                    stateDB:{
                        ...state.peerInputDetails.stateDB,
                        [action.inputCouchDBData.key]:action.inputCouchDBData.value
                    }
                }
            }
        case SELECTED_CHECKBOX_STATUS:
            return {
                ...state,
                peerInputDetails:{
                    ...state.peerInputDetails,
                    [action.InputObject.key]:action.InputObject.value
                }
            }
        case CREATE_PEER_REQUEST_STARTS:
            return {
                ...state,
                createOrgPeerLoading:true
            }
        case CREATE_PEER_REQUEST_SUCCESS:
            return {
                ...state,
                createOrgPeerLoading:false,
                requestResponse:action.res
            }
        case CREATE_PEER_REQUEST_FAILED:
            return {
                ...state,
                createOrgPeerErrorMessage:action.error,
                createOrgPeerLoading:false,
            }
        case GET_ORG_PEER_BY_ID_STARTS:
            return {
                ...state,
                getPeerByIdrequestStarts:true
            }
        case GET_ORG_PEER_BY_ID_SUCCESS:
            return {
                ...state,
                getPeerByIdrequestStarts:false,
                getPeerByIdrequestResponse:action.response

            }
        case CLOSE_ORG_PEER_ERROR_POPUP:
            return {
                ...state,
                createOrgPeerErrorMessage:''
            }
        default:
            return state
    }
}