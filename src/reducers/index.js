import { combineReducers } from "redux";
import networkReducer from './networkReducer'
import signUpNewMemberReducer from "./signUpNewMemberReducer";
import authenticationReducer from "./authenticationReducer";
import roleRequestSentReducer from "./RoleRequest/roleRequestSentReducer";
import roleRequestReceivedReducer from "./RoleRequest/roleRequestReceivedReducer";
import navigationReducer from "./navigationReducer";
import activeUsersReducer from "./activeUsersReducer";
import manageRolesReducer from './manageRolesReducer';
import orgSetUpMultiPartFormNavigationReducer from './orgSetUpMultiPartFormNavigationReducer';
import orgCAreducer from './OrgSetUp/orgCAreducer';
import orgMSPreducer from './OrgSetUp/orgMSPreducer';
import orgPeersReducer from './OrgSetUp/orgConfigParameter/orgPeersReducer';
import orgOrdererReducer from './OrgSetUp/orgConfigParameter/orgOrdererReducer';

const rootReducer = combineReducers(
    {
        network:networkReducer,
        signUp:signUpNewMemberReducer,
        authenticate:authenticationReducer,
        requestSent:roleRequestSentReducer,
        requestReceived:roleRequestReceivedReducer,
        navigation:navigationReducer,
        activeUsersList:activeUsersReducer,
        manageRoles:manageRolesReducer,
        orgSetUpMultipartFormReducer:orgSetUpMultiPartFormNavigationReducer,
        orgCA:orgCAreducer,
        orgMSP:orgMSPreducer,
        orgPeer:orgPeersReducer,
        orgOrderer:orgOrdererReducer
    }
    );

export default rootReducer