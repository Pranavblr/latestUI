import FileSaver from "file-saver";
import AbstractHttpService from '../../../services/AbstractHttpService';
import config from '../../../config/apiUrl';

import {ADD_NEW_PEER,FETCH_ORG_PEER_INPUT_DETAILS,
    SELECTED_PEER_FILE,SELECTED_CHECKBOX_STATUS,CREATE_PEER_REQUEST_STARTS,
    CREATE_PEER_REQUEST_SUCCESS,CREATE_PEER_REQUEST_FAILED,GET_ORG_PEER_BY_ID_STARTS,
    GET_ORG_PEER_BY_ID_SUCCESS,GET_COUCH_DB_DATA,FETCH_ORGANIZATION_DEATILS_SUCCESS} from '../../../constants/actiontypes';

export const getUserInput = (inputObject)=>{
    return {
        type:FETCH_ORG_PEER_INPUT_DETAILS,
        inputObject
    }
}
export const getSelectedPeerFile = (inputFileObject)=>{
    return {
        type:SELECTED_PEER_FILE,
        inputFileObject
    }
}
export const handleCheckBoxStatus = (InputObject)=>{
    
    return {
        type:SELECTED_CHECKBOX_STATUS,
        InputObject

    }
}
export const getCouchDBdata = (inputCouchDBData)=>{
    return {
        type:GET_COUCH_DB_DATA,
        inputCouchDBData
    }
}

export const addNewPeer = ()=>{
    return {
        type:ADD_NEW_PEER
    }
}
export const createOrgPeerStrats = ()=>{
    return{
        type:CREATE_PEER_REQUEST_STARTS
    }
}
export const createOrgPeersSuccess = (res)=>{
   return {
       type:CREATE_PEER_REQUEST_SUCCESS,
       res
   }
}
export const createOrgPeerFailed = (error)=>{
   return {
       type:CREATE_PEER_REQUEST_FAILED,
       error
   }
}
export const createPeersOfOrg = (peerDetails)=>{
    let currentOrgName= localStorage.getItem('current-orgName');
    let createPeersOfOrgUrl = config.config.createOrgPeer+currentOrgName+'/nodes';
    return (dispatch)=>{
        dispatch(createOrgPeerStrats())
        AbstractHttpService.generic_Api_call("post",createPeersOfOrgUrl,peerDetails)
        .then((res)=>{
            
            dispatch(createOrgPeersSuccess(res.data));
            dispatch(getOrgnizationDetails());
            dispatch(getOrgPeerById(res.data[0]._doc._id))
            
        }).catch(error=>{
            if(error&&error.response&&error.response.data){
                dispatch(createOrgPeerFailed(error.response.data))
            }else if(error&&error.response){
                if(error.response.status===401){
                    dispatch(createOrgPeerFailed(error.response.statusText))
                }
            }else{
                dispatch(createOrgPeerFailed('Failed to create org Peer.'))
            }
        })
    }
}
export const getOrgnizationDetailsSuccess = (res)=>{
    return {
        type:FETCH_ORGANIZATION_DEATILS_SUCCESS,
        res
    }
}
export const getOrgnizationDetails = ()=>{
    let orgName = localStorage.getItem('current-orgName');
    let organizationDetailsUrl = config.config.getOrgDetails+orgName;
    return(dispatch)=>{
        AbstractHttpService.generic_Api_call("GET",organizationDetailsUrl,{})
        .then((res)=>{
            
            dispatch(getOrgnizationDetailsSuccess(res.data))
            // dispatch(getOrgPeerById(res.data._id));
        })
        .catch(error=>{
            console.log('error is',error)
        })
    }
}
export const getOrgPeerByIdStarts = ()=>{
    return {
        type:GET_ORG_PEER_BY_ID_STARTS
    }
}
export const getOrgPeerByIdSuccess = (response)=>{
    return {
        type:GET_ORG_PEER_BY_ID_SUCCESS,
        response
    }
}
export const getOrgPeerById = (id)=>{
    let getOrgByidUrl = config.config.getPeerOrdererById+id+'/peer';
    return(dispatch)=>{
        dispatch(getOrgPeerByIdStarts());
        AbstractHttpService.generic_Api_call("get",getOrgByidUrl,{})
        .then((res)=>{
          dispatch(getOrgPeerByIdSuccess(res.data))
        }).catch(error=>{
            console.log('error is',error)
        })
    }
}
export const exportOrgPeer = (Peerdetails)=>{
    let orgName = localStorage.getItem('current-orgName');
    let orgCAUrl = config.config.exportOrgCA+orgName+'/'+Peerdetails._id + '/peer/export';
    return(dispatch)=>{
        AbstractHttpService.generic_Export_Api_call("get",orgCAUrl,{})
        .then(res => {
            console.log('res', res)
          return res.data;
        })
        .then(blob     => {
          FileSaver.saveAs(blob);
        })
        .catch(error=>{
            console.log('error is', error)
        })
    }
}