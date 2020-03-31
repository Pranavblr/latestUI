import FileSaver from "file-saver";
import AbstractHttpService from '../../../services/AbstractHttpService';
import config from '../../../config/apiUrl';

import {ADD_NEW_ORDERER,FETCH_ORG_ORDERER_INPUT_DETAILS,
    ORDERER_SELECTED_CHECKBOX,
    CREATE_ORDERER_REQUEST_STARTS,CREATE_ORDERER_REQUEST_SUCCESS,
    CREATE_ORDERER_REQUEST_FAILED,SELECTED_ORDERER_FILE,
    GET_ORG_ORDERER_BY_ID_STARTS,GET_ORG_ORDERER_BY_ID_SUCCESS,
    FETCH_ORGANIZATION_DEATILS_SUCCESS} from '../../../constants/actiontypes';

export const getUserInput = (inputObject)=>{
    return {
        type:FETCH_ORG_ORDERER_INPUT_DETAILS,
        inputObject
    }
}
export const getSelectedOrdererFile = (inputFileObject)=>{
    return {
        type:SELECTED_ORDERER_FILE,
        inputFileObject
    }
}
export const handleClickOrdererCheckBox=(inputObject)=>{
    return {
        type:ORDERER_SELECTED_CHECKBOX,
        inputObject 
    }
}
export const addNewOrderer = ()=>{
    return {
        type:ADD_NEW_ORDERER
    }
}
export const createOrdererRequestStarts = ()=>{
    return {
        type:CREATE_ORDERER_REQUEST_STARTS
    }
}

export const createOrderRequestSucess = (res)=>{
     return {
         type:CREATE_ORDERER_REQUEST_SUCCESS,
         res
     }
}
export const createOrdererRequestFailed = (error)=>{
   return {
       type:CREATE_ORDERER_REQUEST_FAILED,
       error
   }
}
export const createOrderer = (ordererDetails)=>{
    let currentOrgName= localStorage.getItem('current-orgName');
    let createOrdererUrl = config.config.createOrgOrderer+currentOrgName+'/nodes';
    return(dispatch)=>{
        dispatch(createOrdererRequestStarts())
        AbstractHttpService.generic_Api_call("post",createOrdererUrl,ordererDetails)
        .then((res)=>{
            
            dispatch(createOrderRequestSucess(res.data))
            dispatch(getOrgOrdererById(res.data[0]._doc._id));
            dispatch(getOrgnizationDetails())
        })
        .catch(error=>{
            if(error&&error.response&&error.response.data){
                dispatch(createOrdererRequestFailed(error.response.data))
            }else if(error&&error.response){
                if(error.response.status===401){
                    dispatch(createOrdererRequestFailed(error.response.statusText))
                }
            }else{
                dispatch(createOrdererRequestFailed('Failed to create org Orderer.'))
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
export const getOrgOrdererByIdStarts = ()=>{
    return {
        type:GET_ORG_ORDERER_BY_ID_STARTS
    }
}
export const getOrgOrdererByIdSuccess = (response)=>{
    return {
        type:GET_ORG_ORDERER_BY_ID_SUCCESS,
        response
    }
}
export const getOrgOrdererById = (id)=>{
    let getOrgByidUrl = config.config.getPeerOrdererById+id+'/orderer';
    return(dispatch)=>{
        dispatch(getOrgOrdererByIdStarts())
        AbstractHttpService.generic_Api_call("get",getOrgByidUrl,{})
        .then((res)=>{
           dispatch(getOrgOrdererByIdSuccess(res.data))
        }).catch(error=>{
            console.log('error is',error)
        })
    }
}
export const exportOrgOrderer = (Ordererdetails)=>{
    let orgName = localStorage.getItem('current-orgName');
    let orgCAUrl = config.config.exportOrgCA+orgName+'/'+Ordererdetails._id + '/orderer/export';
    return(dispatch)=>{
        AbstractHttpService.generic_Api_call("get",orgCAUrl,{})
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