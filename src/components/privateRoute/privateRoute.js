import React, { Component } from 'react';
import {Route,withRouter,Redirect} from "react-router-dom";
import {connect} from 'react-redux';

import Login from '../../pages/login/Login'
import {getAllRequestSentByUser} from '../../actions/RoleRequest/RequestSent';
import AbstractHttpService from '../../services/AbstractHttpService';
import config from '../../config/apiUrl';
import * as JWT from 'jsonwebtoken';


export default function privateRoute(ComposedComponent) {
    let show = true
    class Authentication extends Component {
        constructor(props){
            super(props);
            this.state={
                tokenExpired:false
            }
        }
         checkRoleTokenValidity(){
            let role_token = localStorage.getItem('role_token')?localStorage.getItem('role_token'):'';
            if(role_token===null||role_token===""){
                console.log('localstorage is null')
                return false
            }else{
                let decoded_token = role_token?JWT.decode(role_token):'';
                console.log('private-route-decoded-roleToken',decoded_token);
                if(decoded_token&&decoded_token.role){
                  return true
                }else{
                    return false
                }
            }
            
        //     let uid = localStorage.getItem('user-id')?localStorage.getItem('user-id'):'';
        //     if(uid===null||uid===""){
        //         console.log('localstorage is null');
        //          this.setState({tokenExpired:true},function(){
        //                return true
        //         });
        //     }
        //     let requestSentUrl = config.config.requestSentUser+uid;
        //     await AbstractHttpService.generic_Api_call("get",requestSentUrl,{})
        //     .then((res)=>{
        //       debugger
        //       console.log('response-came')
        //       if(res.status===200||res.status===201){
        //         this.setState({tokenExpired:false},function(){
        //             return true
        //         })
                
        //       }
        //    }).catch(error=>{
        //        debugger
        //        if(error&&error.response&&error.response.status===401||error.response.status===403||error.response.status===404){
        //         this.setState({tokenExpired:true },function(){
        //             return true
        //         })
                
        //        }
        //     debugger
        // })
        }
        RedirectToHome = ()=>{
            window.location.href = '/';
        }
        render() {
            return (
            <div>
             {this.checkRoleTokenValidity()?
             <ComposedComponent {...this.props} />:this.RedirectToHome()}
            </div> 
            )
        }
    }
    return Authentication
}