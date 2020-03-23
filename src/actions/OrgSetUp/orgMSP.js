import config from  '../../config/apiUrl';
import AbstractHttpService from '../../services/AbstractHttpService';
import {DEFAULT_ORG_MSP_STATE,ORG_MSP_REQUEST_STARTS
,ORG_MSP_REQUEST_SUCCESS,ORG_MSP_REQUEST_FAILED,
SELECT_CA_CERTIFICATE,
FETCH_ORG_MSP_INPUT_DETAILS,GET_CA_LIST_SUCCESS} from '../../constants/actiontypes';

export const getUserInputs = (inputObject)=>{
   return {
       type:FETCH_ORG_MSP_INPUT_DETAILS,
       inputObject
   }
}
export const getSelectedCAcertificate = (selcetedCA)=>{
    return {
        type:SELECT_CA_CERTIFICATE,
        selcetedCA
    }
}
export const defaultOrgMSPstate = ()=>{
    return {
        type:DEFAULT_ORG_MSP_STATE 
    }
}
export const createOrgMSPstarts = ()=>{
    return {
        type:ORG_MSP_REQUEST_STARTS
    }
}
export const createOrgMSPSuccess = (response)=>{
   return{
       type:ORG_MSP_REQUEST_SUCCESS,
       response
   }
}
export const createOrgMSPFailed = (error)=>{
  return {
      type:ORG_MSP_REQUEST_FAILED,
      error
  }
}

export const createOrgMSP=(mspDetails)=>{
let orgId = localStorage.getItem('currentOrg_id')
let createOrgMSPUrl = config.config.createOrgMSP+orgId+'/createMSP';
    return(dispatch)=>{
        dispatch(createOrgMSPstarts())
       AbstractHttpService.generic_Api_call("PUT",createOrgMSPUrl,mspDetails)
        .then((res)=>{
            dispatch(dispatch(createOrgMSPSuccess(res.data)))
          console.log(res);
        })
        .catch(error=>{
            if(error&&error.response&&error.response.data){
                dispatch(createOrgMSPFailed(error.response.data))
            }else if(error&&error.response){
                if(error.response.status===401){
                    dispatch(createOrgMSPFailed(error.response.statusText))
                }
            }else{
                dispatch(createOrgMSPFailed('Failed to create orgMSP'))
            }
            console.log('error',error)
        })
    }
}
export const exportOrgMSPdetails =()=>{
    let orgName = localStorage.getItem('current-orgName');
    let orgMSPUrl = config.config.exportorgMSP+orgName+'/msp/export';
    return (dispatch)=>{
        AbstractHttpService.generic_Api_call("GET",orgMSPUrl,{})
        .then((res)=>{

        })
        .catch(error=>{
            console.log('error is', error)
        })
    }
}
export const getCAlistSuccesss = (res)=>{
   return {
       type:GET_CA_LIST_SUCCESS,
       res
   }
}
export const getCAList = ()=>{
    let orgName = localStorage.getItem('current-orgName');
    let orgCAlist = config.config.getCAlist+orgName+'/calist';
    return(dispatch)=>{
        AbstractHttpService.generic_Api_call("GET",orgCAlist,{})
        .then((res)=>{
            dispatch(getCAlistSuccesss(res.data))
        })
        .catch(error=>{
            console.log('error',error)
        })
    }
}