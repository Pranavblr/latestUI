import {DEFAULT_ORG_MSP_STATE,ORG_MSP_REQUEST_STARTS
    ,ORG_MSP_REQUEST_SUCCESS,ORG_MSP_REQUEST_FAILED,CLOSE_ORG_MSP_ERROR_POPUP,
    FETCH_ORG_MSP_INPUT_DETAILS,GET_CA_LIST_SUCCESS,SELECT_CA_CERTIFICATE} from '../../constants/actiontypes';

let initialState={
    loading:false,
    mspInputDetails:{
        ca: "5e54e7c0abf7bf67ee694ae2",
        tlsCA:"5e54eb8cc4e9336a6bcd84be",
        adminCert:"-----BEGIN CERTIFICATE-----\nMIICGjCCAcCgAwIBAgIRAIPRwJHVLhHK47XK0BbFZJswCgYIKoZIzj0EAwIwczEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\ncmFuY2lzY28xGTAXBgNVBAoTEG9yZzIuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\nLm9yZzIuZXhhbXBsZS5jb20wHhcNMTcwNjIzMTIzMzE5WhcNMjcwNjIxMTIzMzE5\nWjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN\nU2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWVXNlcjFAb3JnMi5leGFtcGxlLmNvbTBZ\nMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBd9SsEiFH1/JIb3qMEPLR2dygokFVKW\neINcB0Ni4TBRkfIWWUJeCANTUY11Pm/+5gs+fBTqBz8M2UzpJDVX7+2jTTBLMA4G\nA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIKfUfvpGproH\ncwyFD+0sE3XfJzYNcif0jNwvgOUFZ4AFMAoGCCqGSM49BAMCA0gAMEUCIQC8NIMw\ne4ym/QRwCJb5umbONNLSVQuEpnPsJrM/ssBPvgIgQpe2oYa3yO3USro9nBHjpM3L\nKsFQrpVnF8O6hoHOYZQ=\n-----END CERTIFICATE-----",
        adminKey:"-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgmHG6n4ZvwUeV4jCp\nkvAmGSQKZ+vOYsyzRZgYwORO+vChRANCAAQXfUrBIhR9fySG96jBDy0dncoKJBVS\nlniDXAdDYuEwUZHyFllCXggDU1GNdT5v/uYLPnwU6gc/DNlM6SQ1V+/t\n-----END PRIVATE KEY-----",
        enrollId: "1234",
        enrollSecret: "abc"
    
    },
    orgMSPRequestResponse:'',
    errorResponse:'',
    caList:''
}
export default function orgMSPreducer(state=initialState,action){
    switch(action.type){
        case DEFAULT_ORG_MSP_STATE:
            return initialState
        case FETCH_ORG_MSP_INPUT_DETAILS:
            return {
                ...state,
                mspInputDetails:{
                    ...state.mspInputDetails,
                    [action.inputObject.key]:action.inputObject.value
                }
            }
        case SELECT_CA_CERTIFICATE:
            return {
                ...state,
                mspInputDetails:{
                    ...state.mspInputDetails,
                    ca:action.selcetedCA
                }
            }
        case ORG_MSP_REQUEST_STARTS:
            return {
                ...state,
                loading:true
            }
        case ORG_MSP_REQUEST_SUCCESS:
            return {
                ...state,
                loading:false,
                orgMSPRequestResponse:action.response
            }
        case ORG_MSP_REQUEST_FAILED:
            return {
                ...state,
                loading:false,
                errorResponse:action.error
            }
        case CLOSE_ORG_MSP_ERROR_POPUP:
            return {
                ...state,
                errorResponse:''
            }
        case GET_CA_LIST_SUCCESS:
            return{
                ...state,
                caList:action.res
            }
        default:
            return state
    }
}