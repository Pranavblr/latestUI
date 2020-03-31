import {
    DEFAULT_ORG_MSP_STATE, ORG_MSP_REQUEST_STARTS
    , ORG_MSP_REQUEST_SUCCESS, ORG_MSP_REQUEST_FAILED, CLOSE_ORG_MSP_ERROR_POPUP,
    FETCH_ORG_MSP_INPUT_DETAILS, GET_CA_LIST_SUCCESS, SELECT_CA_CERTIFICATE, SELECTED_MSP_FILE,
    FETCH_ORGANIZATION_DEATILS_SUCCESS, ADD_NEW_MSP, GET_CA_LIST_STARTS
} from '../../constants/actiontypes';

let initialState = {
    loading: false,
    mspInputDetails: {
        ca: null,
        tlsCA: null,
        adminCert: "",
        adminKey: "",
        enrollId: "",
        enrollSecret: ""

    },
    orgMSPRequestResponse: '',
    errorResponse: '',
    caListLoading: false,
    caList: '',
    currentOrgDetails: ''
}
export default function orgMSPreducer(state = initialState, action) {
    switch (action.type) {
        case DEFAULT_ORG_MSP_STATE:
            return {
                ...state,
                mspInputDetails: {
                    ca: null,
                    tlsCA: null,
                    adminCert: "",
                    adminKey: "",
                    enrollId: "",
                    enrollSecret: ""

                },
                orgMSPRequestResponse: '',
                errorResponse: '',
                caListLoading: false,
            }
        case ADD_NEW_MSP:
            return {
                ...state,
                orgMSPRequestResponse: ''
            }
        case FETCH_ORG_MSP_INPUT_DETAILS:
            return {
                ...state,
                mspInputDetails: {
                    ...state.mspInputDetails,
                    [action.inputObject.key]: action.inputObject.value
                }
            }
        case SELECTED_MSP_FILE:
            return {
                ...state,
                mspInputDetails: {
                    ...state.mspInputDetails,
                    [action.inputObject.key]: action.inputObject.value
                }
            }
        case SELECT_CA_CERTIFICATE:
            return {
                ...state,
                mspInputDetails: {
                    ...state.mspInputDetails,
                    [action.inputObject.key]: action.inputObject.value
                }
            }
        case ORG_MSP_REQUEST_STARTS:
            return {
                ...state,
                loading: true
            }
        case ORG_MSP_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                orgMSPRequestResponse: action.response
            }
        case ORG_MSP_REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                errorResponse: action.error
            }
        case CLOSE_ORG_MSP_ERROR_POPUP:
            return {
                ...state,
                errorResponse: ''
            }
        case GET_CA_LIST_STARTS:
            return {
                ...state,
                caListLoading: true
            }
        case GET_CA_LIST_SUCCESS:
            return {
                ...state,
                caList: action.res,
                caListLoading: false
            }
        case FETCH_ORGANIZATION_DEATILS_SUCCESS:
            return {
                ...state,
                currentOrgDetails: action.res
            }
        default:
            return state
    }
}