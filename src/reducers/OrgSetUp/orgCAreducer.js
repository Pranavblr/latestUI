import {DEAFULT_ORG_CA_STATE,ORG_CA_REQUEST_STARTS,
    ORG_CA_REQUEST_SUCCESS,ORG_CA_REQUEST_FAILED,CLOSE_CA_ERROR_POPUP,
    FETCH_ORG_CA_INPUT_DETAILS,FETCH_ORG_CA_FILE_DATA} from '../../constants/actiontypes';

let initialState={
    loading:false,
    CAinputDetails:{
            name: "hongdttlsicaca",
            fqdn: "hongdttlsicaca.blockchain.honeywell.com",
            enrollId: "hongdttlsicaca-admin",
            enrollSecret: "hongdttlsicaca-adminpw",
            ipAddress: "10.10.1.198",
            serverPort: 7053,
            enableTLSAuth: true,
            enableClientTLSAuth: true,
            enableOpTLSAuth: true,
            enableOpClientTLSAuth: true,
            rootCA: "null",
            opServicePort: 7443,
            tlsOpsRootCertId: "5e54eb5fc4e9336a6bcd84bd",
            adminCert:"-----BEGIN CERTIFICATE-----\nMIICGjCCAcCgAwIBAgIRAIPRwJH5LhHK47XK0BbFZJswCgYIKozIzj0EAwIwczEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\ncmFuY2lzY28xGTAXBgNVBAoTEG9yZzIuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\nLm9yZzIuZXhhbXBsZS5jb20wHhcNMTcwNjIzMTIzMzE5WhcNMjcwNjIxMTIzMzE5\nWjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN\nU2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWVXNlcjFAb3JnMi5leGFtcGxlLmNvbTBZ\nMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBd9SsEiFH1/JIb3qMEPLR2dygokFVKW\neINcB0Ni4TBRkfIWWUJeCANTUY11Pm/+5gs+fBTqBz8M2UzpJDVX7+2jTTBLMA4G\nA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIKfUfvpGproH\ncwyFD+0sE3XfJzYNcif0jNwvgOUFZ4AFMAoGCCqGSM49BAMCA0gAMEUCIQC8NIMw\ne4ym/QRwCJb5umbONNLSVQuEpnPsJrM/ssBPvgIgQpe2oYa3yO3USro9nBHjpM3L\nKsFQrpVnF8O6hoHOYZQ=\n-----END CERTIFICATE-----",
            adminKey:"-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgmHG6n4ZvwUeV4jCp\nkvAmGSQKZ+vOYsyzRZgYwORO+vChRANCAAQXfUrBIhR9fySG96jBDy0dncoKJBVS\nlniDXAdDYuEwUZHyFllCXggDU1GNdT5v/uYLPnwU6gc/DNlM6SQ1V+/t\n-----END PRIVATE KEY-----",
            serverCert:"",
            serverKey:"-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgmHG6n4ZvwUeV4jCp\nkvAmGSQKZ+vOYsyzRZgYwORO+vChRANCAAQXfUrBIhR9fySG96jBDy0dncoKJBVS\nlniDXAdDYuEwUZHyFllCXggDU1GNdT5v/uYLPnwU6gc/DNlM6SQ1V+/t\n-----END PRIVATE KEY-----",
            tlsServerCert:"-----BEGIN CERTIFICATE-----\nMIICGjCCAcCgAwIBAgIRAIPRwJH7LhHK47XK0BbFzJswCgYIKoZIzj0EAwIwczEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\ncmFuY2lzY28xGTAXBgNVBAoTEG9yZzIuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\nLm9yZzIuZXhhbXBsZS5jb20wHhcNMTcwNjIzMTIzMzE5WhcNMjcwNjIxMTIzMzE5\nWjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN\nU2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWVXNlcjFAb3JnMi5leGFtcGxlLmNvbTBZ\nMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBd9SsEiFH1/JIb3qMEPLR2dygokFVKW\neINcB0Ni4TBRkfIWWUJeCANTUY11Pm/+5gs+fBTqBz8M2UzpJDVX7+2jTTBLMA4G\nA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIKfUfvpGproH\ncwyFD+0sE3XfJzYNcif0jNwvgOUFZ4AFMAoGCCqGSM49BAMCA0gAMEUCIQC8NIMw\ne4ym/QRwCJb5umbONNLSVQuEpnPsJrM/ssBPvgIgQpe2oYa3yO3USro9nBHjpM3L\nKsFQrpVnF8O6hoHOYZQ=\n-----END CERTIFICATE-----",
            tlsServerKey:"-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgmHG6n4ZvwUeV4jCp\nkvAmGSQKZ+vOYsyzRZgYwORO+vChRANCAAQXfUrBIhR9fySG96jBDy0dncoKJBVS\nlniDXAdDYuEwUZHyFllCXggDU1GNdT5v/uYLPnwU6gc/DNlM6SQ1V+/t\n-----END PRIVATE KEY-----"
    },
    orgCARequestResponse:'',
    errorResponse:''
}
export default function orgCAreducer(state=initialState,action){
    switch(action.type){
        case DEAFULT_ORG_CA_STATE:
            return initialState
        case FETCH_ORG_CA_INPUT_DETAILS:
            return {
                ...state,
                CAinputDetails:{
                    ...state.CAinputDetails,
                    [action.inputObject.key]:action.inputObject.value
                }
            }
        case FETCH_ORG_CA_FILE_DATA:
            return {
                ...state,
                CAinputDetails:{
                    ...state.CAinputDetails,
                    [action.inputFile.key]:action.inputFile.value
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
        default:
            return state 
    }
}