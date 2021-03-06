export const FETCH_NETWORK_DATA = 'fetch_network_data';
export const FETCH_NETWORK_DATA_SUCCESS = 'fetch_network_data_success';
export const FETCH_NETWORK_DATA_FAIL = 'fetch_network_data_fail';

//action types for authentication
export const DEFAULT_SIGNIN_STATE = 'DEFAULT_SIGNIN_STATE';
export const REQUEST_FOR_SIGN_IN='REQUEST_FOR_SIGN_IN';
export const REQUEST_SIGNIN_SUCCESS = 'REQUEST_SIGNIN_SUCCESS';
export const REQUEST_SIGNIN_FAILED = 'REQUEST_SIGNIN_FAILED';
export const RESET_AUTH_ERROR_POPUP = 'RESET_AUTH_ERROR_POPUP';
export const FETCH_ORGNAME = 'FETCH_ORGNAME';
export const SIGN_OUT_USER_SUCCESS = 'SIGN_OUT_USER_SUCCESS';

//action types for Signup pages
export const DEFAULT_SIGNUP_STATE = 'DEFAULT_SIGNUP_STATE';
export const FETCH_USER_DETAILS = 'FETCH_USER_DETAILS';
export const FETCH_USER_ORG_DETAILS= 'FETCH_USER_ORG_DETAILS';
export const SIGN_UP_REQUEST_STARTS = 'SIGN_UP_REQUEST_STARTS';
export const SIGN_UP_REQUEST_SUCCESS = 'SIGN_UP_REQUEST_SUCCESS';
export const SIGN_UP_REQUEST_FAILED = 'SIGN_UP_REQUEST_FAILED';
export const RESET_SIGNUP_ERROR_POPUP = 'RESET_SIGNUP_ERROR_POPUP';
export const UPDATE_NAME = 'UPDATE_NAME';

//action types for Request recieved
export const DEFAULT_REQUEST_RECEIVED_STATE = 'DEFAULT_REQUEST_RECEIVED_STATE';
export const REQUEST_RECEIVED_CALL_STARTS = 'REQUEST_RECEIVED_CALL_STARTS';
export const REQUEST_RECEIVED_CALL_SUCCESS = 'REQUEST_RECEIVED_CALL_SUCCESS';
export const REQUEST_RECEIVED_CALL_FAILED = 'REQUEST_RECEIVED_CALL_FAILED';
export const REQUEST_ACCEPT_OR_REJECT_STARTS = 'REQUEST_ACCEPT_OR_REJECT_STARTS';
export const REQUEST_ACCEPT_OR_REJECT_SUCCESS = 'REQUEST_ACCEPT_OR_REJECT_SUCCESS';

//action types for Request sent
export const DEFAULT_REQUEST_SENT_STATE = 'DEFAULT_REQUEST_SENT_STATE';
export const REQUEST_SENT_CALL_STARTS = 'REQUEST_SENT_CALL_STARTS';
export const REQUEST_SENT_CALL_SUCCESS = 'REQUEST_SENT_CALL_SUCCESS';
export const REQUEST_SENT_CALL_FAILED = 'REQUEST_SENT_CALL_FAILED';
export const UNAUTHORIZED_API_REQUEST = 'UNAUTHORIZED_API_REQUEST';

//action types for navigation between items
export const GET_SELECTED_SIDENAV_ITEM = 'GET_SELECTED_SIDENAV_ITEM';
export const GET_SELECTED_SUBMENU_ITEM = 'GET_SELECTED_SUBMENU_ITEM';

//action types for active users
export const DEFAULT_ACTIVE_USERS_STATE = 'DEFAULT_ACTIVE_USERS_STATE';
export const GET_ACTIVE_USERS_LIST_STARTS = 'GET_ACTIVE_USERS_LIST_STARTS';
export const GET_ACTIVE_USERS_LIST_SUCCESS = 'GET_ACTIVE_USERS_LIST_SUCCESS';
export const GET_ACTIVE_USERS_LIST_FAILED = 'GET_ACTIVE_USERS_LIST_FAILED';

//action type for managing user roles
export const DEFAULT_MANAGE_ROLES_STATE = 'DEFAULT_MANAGE_ROLES_STATE';
export const OPEN_MANAGE_ROLES_POP_UP = 'OPEN_MANAGE_ROLES_POP_UP';
export const CLOSE_MANAGE_ROLES_POP_UP = 'CLOSE_MANAGE_ROLES_POP_UP';
export const GET_SELECTED_ROLE = 'GET_SELECTED_ROLE';
export const MANAGE_ROLES_REQUEST_STARTS = 'MANAGE_ROLES_REQUEST_STARTS';
export const MANAGE_ROLES_REQUEST_SUCCESS = 'MANAGE_ROLES_REQUEST_SUCCESS';
export const MANGAGE_ROLES_REQUEST_FAILED = 'MANGAGE_ROLES_REQUEST_FAILED';

//action types for orgsetup multipart form navigation
export const NAVIGATE_BETWEEN_FORMS = 'NAVIGATE_BETWEEN_FORMS'; 

//action types for orgCA form
export const DEAFULT_ORG_CA_STATE = 'DEAFULT_ORG_CA_STATE';
export const FETCH_ORG_CA_INPUT_DETAILS = 'FETCH_ORG_CA_INPUT_DETAILS';
export const FETCH_ORG_CA_FILE_DATA = 'FETCH_ORG_CA_FILE_DATA';
export const ORG_CA_REQUEST_STARTS = 'ORG_CA_REQUEST_STARTS';
export const ORG_CA_REQUEST_SUCCESS = 'ORG_CA_REQUEST_SUCCESS';
export const ORG_CA_REQUEST_FAILED = 'ORG_CA_REQUEST_FAILED';
export const CLOSE_CA_ERROR_POPUP = 'CLOSE_CA_ERROR_POPUP';
export const GET_SELECTED_CHECK_BOX = 'GET_SELECTED_CHECK_BOX';
export const GET_CA_BY_ID_STARTS = 'GET_CA_BY_ID_STARTS';
export const GET_CA_BY_ID = 'GET_CA_BY_ID';
export const ADD_NEW_CA= 'ADD_NEW_CA';

//action types for orgMSP form
export const DEFAULT_ORG_MSP_STATE = 'DEFAULT_ORG_MSP_STATE';
export const ORG_MSP_REQUEST_STARTS = 'ORG_MSP_REQUEST_STARTS';
export const FETCH_ORG_MSP_INPUT_DETAILS = 'FETCH_ORG_MSP_INPUT_DETAILS';
export const ORG_MSP_REQUEST_SUCCESS = 'ORG_MSP_REQUEST_SUCCESS';
export const ORG_MSP_REQUEST_FAILED = 'ORG_MSP_REQUEST_FAILED';
export const CLOSE_ORG_MSP_ERROR_POPUP='CLOSE_ORG_MSP_ERROR_POPUP';
export const GET_CA_LIST_STARTS = 'GET_CA_LIST_STARTS';
export const GET_CA_LIST_SUCCESS = 'GET_CA_LIST_SUCCESS';
export const SELECT_CA_CERTIFICATE='SELECT_CA_CERTIFICATE';
export const SELECTED_MSP_FILE = 'SELECTED_MSP_FILE';
export const FETCH_ORGANIZATION_DEATILS_SUCCESS = 'FETCH_ORGANIZATION_DEATILS_SUCCESS';
export const ADD_NEW_MSP = 'ADD_NEW_MSP';

//action types for orgPeer form 
export const ADD_NEW_PEER = 'ADD_NEW_PEER';
export const FETCH_ORG_PEER_INPUT_DETAILS = 'FETCH_ORG_PEER_INPUT_DETAILS';
export const SELECTED_PEER_FILE = 'SELECTED_PEER_FILE';
export const GET_COUCH_DB_DATA = 'GET_COUCH_DB_DATA';
export const SELECTED_CHECKBOX_STATUS = 'SELECTED_CHECKBOX_STATUS';
export const DEFAULT_PEER_STATE = 'DEFAULT_PEER_STATE';
export const CREATE_PEER_REQUEST_STARTS = 'CREATE_PEER_REQUEST_STARTS';
export const CREATE_PEER_REQUEST_SUCCESS = 'CREATE_PEER_REQUEST_SUCCESS';
export const CREATE_PEER_REQUEST_FAILED = 'CREATE_PEER_REQUEST_FAILED';
export const GET_ORG_PEER_BY_ID_STARTS = 'GET_ORG_PEER_BY_ID_STARTS';
export const GET_ORG_PEER_BY_ID_SUCCESS = 'GET_ORG_PEER_BY_ID_SUCCESS';
export const CLOSE_ORG_PEER_ERROR_POPUP = 'CLOSE_ORG_PEER_ERROR_POPUP';


//action types for orgOrderer form
export const ADD_NEW_ORDERER = 'ADD_NEW_ORDERER';
export const FETCH_ORG_ORDERER_INPUT_DETAILS = 'FETCH_ORG_ORDERER_INPUT_DETAILS';
export const SELECTED_ORDERER_FILE = 'SELECTED_ORDERER_FILE';
export const ORDERER_SELECTED_CHECKBOX = 'ORDERER_SELECTED_CHECKBOX';
export const SELECTED_ORDERER_CERTIFICATE = 'SELECTED_ORDERER_CERTIFICATE';
export const DEFAULT_ORDERER_STATE = 'DEFAULT_ORDERER_STATE';
export const CREATE_ORDERER_REQUEST_STARTS = 'CREATE_ORDERER_REQUEST_STARTS';
export const CREATE_ORDERER_REQUEST_SUCCESS = 'CREATE_ORDERER_REQUEST_SUCCESS';
export const CREATE_ORDERER_REQUEST_FAILED  = 'CREATE_ORDERER_REQUEST_FAILED';
export const GET_ORG_ORDERER_BY_ID_STARTS= 'GET_ORG_ORDERER_BY_ID_STARTS';
export const GET_ORG_ORDERER_BY_ID_SUCCESS = 'GET_ORG_ORDERER_BY_ID_SUCCESS';
export const CLOSE_ORG_ODERER_ERROR_POPUP= 'CLOSE_ORG_ODERER_ERROR_POPUP';
