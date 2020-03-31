import axios from 'axios';

const login=(method,url,code)=>{
    return(
        axios({
            headers:{
                "Content-Type": "application/json",
                authorization: code
            },
            method:method,
            url:url,
            data:{},
        })
    )
}
const generic_Api_call=(method,url,data)=>{
    let access_token = localStorage.getItem('access_token')?localStorage.getItem('access_token'):'';
    let roletoken = localStorage.getItem('roletoken')?localStorage.getItem('roletoken'):'';
    return(
        axios({
            headers:{
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization':`Bearer ${access_token}`,
                'Access-Control-Allow-Origin': '*',
                'roletoken':roletoken,
                'token':access_token
            },
            // responseType: "blob",
            method:method,
            url:url,
            data:data,
        })
    )
}
const generic_Export_Api_call=(method,url,data)=>{
    let access_token = localStorage.getItem('access_token')?localStorage.getItem('access_token'):'';
    let roletoken = localStorage.getItem('roletoken')?localStorage.getItem('roletoken'):'';
    return(
        axios({
            headers:{
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization':`Bearer ${access_token}`,
                'Access-Control-Allow-Origin': '*',
                'roletoken':roletoken,
                'token':access_token
            },
            responseType: "blob",
            method:method,
            url:url,
            data:data,
        })
    )
}
export default{
    login,
    generic_Api_call,
    generic_Export_Api_call
}