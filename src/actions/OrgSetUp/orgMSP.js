import FileSaver from "file-saver";
import config from  '../../config/apiUrl';
import AbstractHttpService from '../../services/AbstractHttpService';
import {DEFAULT_ORG_MSP_STATE,ORG_MSP_REQUEST_STARTS
,ORG_MSP_REQUEST_SUCCESS,ORG_MSP_REQUEST_FAILED,
SELECT_CA_CERTIFICATE,
FETCH_ORG_MSP_INPUT_DETAILS,GET_CA_LIST_SUCCESS,SELECTED_MSP_FILE,
FETCH_ORGANIZATION_DEATILS_SUCCESS,ADD_NEW_MSP,GET_ORG_PEER_BY_ID_SUCCESS,
GET_ORG_ORDERER_BY_ID_SUCCESS} from '../../constants/actiontypes';

export const getUserInputs = (inputObject)=>{
   return {
       type:FETCH_ORG_MSP_INPUT_DETAILS,
       inputObject
   }
}
export const getSelectedCAcertificate = (inputObject)=>{
    return {
        type:SELECT_CA_CERTIFICATE,
        inputObject
    }
}
export const getSelectedMSPFile = (inputObject)=>{
    return {
        type:SELECTED_MSP_FILE,
        inputObject
    }
}
export const defaultOrgMSPstate = ()=>{
    return {
        type:DEFAULT_ORG_MSP_STATE 
    }
}
export const addNewMSP = ()=>{
    return {
        type:ADD_NEW_MSP
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
            
            dispatch(dispatch(createOrgMSPSuccess(res.data)));
            dispatch(getOrgnizationDetails())
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
        AbstractHttpService.generic_Export_Api_call("GET",orgMSPUrl,{})
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
            
            // let response = res.data&&res.data[0]&&res.data[0].peers?res.data[0].peers[0]:{};
            dispatch(getOrgnizationDetailsSuccess(res.data));
            if( res.data&&res.data[0]&&res.data[0].peers&&res.data[0].peers.length>0){
                dispatch(getOrgPeerById(res.data[0].peers[0]._id))
            }
            if( res.data&&res.data[0]&&res.data[0].orderers&&res.data[0].orderers.length>0){
                dispatch(getOrgOrdererById(res.data[0].orderers[0]._id))
            }
            
            
            // dispatch({type:GET_ORG_PEER_BY_ID_SUCCESS, response})
        })
        .catch(error=>{
            console.log('error is',error)
        })
    }
}
export const getOrgPeerById = (id)=>{
    let getOrgByidUrl = config.config.getPeerOrdererById+id+'/peer';
    return(dispatch)=>{
        AbstractHttpService.generic_Api_call("get",getOrgByidUrl,{})
        .then((res)=>{
            let response = res.data
            dispatch({type:GET_ORG_PEER_BY_ID_SUCCESS, response})
        }).catch(error=>{
            console.log('error is',error)
        })
    }
}
export const getOrgOrdererById = (id)=>{
    let getOrgByidUrl = config.config.getPeerOrdererById+id+'/orderer';
    return(dispatch)=>{
        AbstractHttpService.generic_Api_call("get",getOrgByidUrl,{})
        .then((res)=>{
            let response = res.data
            dispatch({type:GET_ORG_ORDERER_BY_ID_SUCCESS, response})
        }).catch(error=>{
            console.log('error is',error)
        })
    }
}
// export const getCAlistSuccesss = (res)=>{
//    return {
//        type:GET_CA_LIST_SUCCESS,
//        res
//    }
// }
// export const getCAList = ()=>{
//     let orgName = localStorage.getItem('current-orgName');
//     let orgCAlist = config.config.getCAlist+orgName+'/calist';
//     return(dispatch)=>{
//         AbstractHttpService.generic_Api_call("GET",orgCAlist,{})
//         .then((res)=>{
//             dispatch(getCAlistSuccesss(res.data))
//         })
//         .catch(error=>{
//             console.log('error',error)
//         })
//     }
// }