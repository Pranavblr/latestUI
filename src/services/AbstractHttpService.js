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
    let role_token = localStorage.getItem('role_token')?localStorage.getItem('role_token'):'';
    return(
        axios({
            headers:{
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization':`Bearer ${access_token}`,
                'Access-Control-Allow-Origin': '*',
                'role_token':role_token
            },
            method:method,
            url:url,
            data:data,
        })
    )
}
export default{
    login,
    generic_Api_call
}