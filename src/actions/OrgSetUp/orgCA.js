import config from  '../../config/apiUrl';
import AbstractHttpService from '../../services/AbstractHttpService';
import {DEAFULT_ORG_CA_STATE,ORG_CA_REQUEST_STARTS,
    ORG_CA_REQUEST_SUCCESS,ORG_CA_REQUEST_FAILED,FETCH_ORG_CA_INPUT_DETAILS,
    FETCH_ORG_CA_FILE_DATA,GET_CA_LIST_SUCCESS,GET_SELECTED_CHECK_BOX,
    GET_CA_BY_ID,ADD_NEW_CA} from '../../constants/actiontypes';

export const getUserInput = (inputObject) =>{
   return {
       type:FETCH_ORG_CA_INPUT_DETAILS,
       inputObject
   }
}
export const getUserSelectedFile = (inputFile)=>{
    return {
        type:FETCH_ORG_CA_FILE_DATA,
        inputFile
    }
}
export const getSelectedCheckBoxStatus = (inputObject)=>{
    return {
        type:GET_SELECTED_CHECK_BOX,
        inputObject
    }
}
export const defaultOrgCAstate = ()=>{
    return{
        type:DEAFULT_ORG_CA_STATE
    }
}
export const createOrgCArequestStarts = () =>{
  return {
      type:ORG_CA_REQUEST_STARTS
  }
}
export const createOrgCArequestSuccess = (response) =>{
  return {
      type:ORG_CA_REQUEST_SUCCESS,
      response
  }
}
export const createOrgCArequestFailed = (error) =>{
    return {
        type:ORG_CA_REQUEST_FAILED,
        error
    }
}
export const addNewCA = ()=>{
    return {
        type:ADD_NEW_CA
    }
}
export const createOrgCA = (CAdetails)=>{
    let orgName = localStorage.getItem('current-orgName');
    let createOrgCAUrl = config.config.createOrgCA+orgName+'/ca';
    return (dispatch)=>{
         dispatch(createOrgCArequestStarts())
        AbstractHttpService.generic_Api_call("post",createOrgCAUrl,CAdetails)
        .then((res)=>{
          dispatch(createOrgCArequestSuccess(res.data))
          dispatch(getCAList());
          dispatch(getCADetailsById(res.data._id))
        })
        .catch((error)=>{
            if(error&&error.response&&error.response.data){
                dispatch(createOrgCArequestFailed(error.response.data))
            }else if(error&&error.response){
                if(error.response.status===401){
                    dispatch(createOrgCArequestFailed(error.response.statusText))
                }
            }else{
                dispatch(createOrgCArequestFailed('Failed to create org CA.'))
            }
            console.log('error',error)
        })
    }
}
export const exportOrgCA = (CAdetails)=>{
    let orgName = localStorage.getItem('current-orgName');
    let orgId = localStorage.getItem('currentOrg_id');
    let orgCAUrl = config.config.exportOrgCA+orgName+'/'+CAdetails._id + '/ca/export';
    return(dispatch)=>{
        AbstractHttpService.generic_Api_call("get",orgCAUrl,{})
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
            //  if(res&&res.data&&res.data.length===1){

            //  }
             dispatch(getCADetailsById(res.data[0]._id))
         })
         .catch(error=>{
             console.log('error',error)
         })
     }
 }
 export const getCAByIdSucess = (res)=>{
    return {
        type:GET_CA_BY_ID,
        res
    }
 }
 export const getCADetailsById = (id)=>{
  let CAbyId = config.config.getCAById+id +'/ca';
  return (dispatch)=>{
      AbstractHttpService.generic_Api_call("GET",CAbyId,{})
      .then((res)=>{
        dispatch(getCAByIdSucess(res.data))
      })
      .catch(error=>{
          console.log('error',error)
      })
  } 
 }
