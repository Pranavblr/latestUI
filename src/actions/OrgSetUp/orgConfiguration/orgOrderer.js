import AbstractHttpService from '../../../services/AbstractHttpService';
import config from '../../../config/apiUrl';

export const getUserInput = ()=>{

}
export const createOrdererRequestStarts = ()=>{

}

export const createOrderRequestSucess = ()=>{

}
export const createOrdererRequestFailed = ()=>{

}
export const createOrderer = (ordererDetails)=>{
    let currentOrgName= localStorage.getItem('current-orgName');
    let createOrdererUrl = config.config.createOrgOrderer+currentOrgName+'/nodes';
    AbstractHttpService.generic_Api_call("post",createOrdererUrl,ordererDetails)
      .then((res)=>{
      })
      .catch(error=>{
          console.log('error',error)
      })
}