let appConfig = window.BASE_URL;
const baseUrl={
    endpoint:appConfig
}

const config = {

    //Login API URL
    authenticate: `${baseUrl.endpoint}/auth/signin`,

    //signOUT API URL
    signOut:`${baseUrl.endpoint}/auth/signout`,

    //SignUp API URL
    signUpNewUser:`${baseUrl.endpoint}/auth/signup`,

    //get user info api
    userInformation:`${baseUrl.endpoint}/user/info/name`,

    //Request Sent API URL
    requestSentUser:`${baseUrl.endpoint}/user/`,

    //Request Received API URL
    requestReceived:`${baseUrl.endpoint}/user/`,

    //Get All Active Users URL
    activeUsers : `${baseUrl.endpoint}/user/`,

    //Managing User role
    manageUserRoles:`${baseUrl.endpoint}/auth/selectRole/`,

    //get org details
    getOrgDetails:`${baseUrl.endpoint}/organization/`,

    //Create Org MSP
    createOrgMSP:`${baseUrl.endpoint}/organization/`,

    //Create Org CA
    createOrgCA:`${baseUrl.endpoint}/organization/`,

    //Create Org Peer
    createOrgPeer:`${baseUrl.endpoint}/organization/`,

    //Create Org Orderer
    createOrgOrderer:`${baseUrl.endpoint}/organization/`,

    //export orgCA 
    exportOrgCA:`${baseUrl.endpoint}/organization/`,

    //export orgMSP
    exportorgMSP:`${baseUrl.endpoint}/organization/`,

    //get CAlist
    getCAlist:`${baseUrl.endpoint}/organization/`,

    //get CA by ID
    getCAById:`${baseUrl.endpoint}/organization/`,

    //get peer/orderer by id
    getPeerOrdererById:`${baseUrl.endpoint}/organization/`

}
export default{
    config
}