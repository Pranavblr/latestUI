import AbstractHttpService from '../../../services/AbstractHttpService';
import config from '../../../config/apiUrl';

export const getUserInput = ()=>{

}
export const createOrgPeerStrats = ()=>{

}
export const createOrgPeersSuccess = ()=>{

}
export const createOrgPeerFailed = ()=>{

}
export const createPeersOfOrg = (peerDetails)=>{
    let currentOrgName= localStorage.getItem('current-orgName');
    let createPeersOfOrgUrl = config.config.createOrgPeer+currentOrgName+'/nodes';
    return (dispatch)=>{
        AbstractHttpService.generic_Api_call("post",createPeersOfOrgUrl,peerDetails)
        .then((res)=>{
        }).catch(error=>{
            console.log('error',error)
        })
    }
   

}