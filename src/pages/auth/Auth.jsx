import React, { Component } from 'react';
//import { Redirect } from "react-router-dom";
// import requestHandler from "../../middleware/requestHandler";
import {connect} from 'react-redux';

import{authenticateuser} from '../../actions/authentication';
import Loader from "../../components/Shared/Loader/Loader";
import ErrorMessage from "../../components/Shared/ErrorMessage/ErrorMessage";

class Auth extends Component {
  constructor(props){
    super(props)
    localStorage.clear();
  }
  componentDidMount(){
    const code = (window.location.search.match(/code=([^&]+)/) || [])[1];
    // getForgeIdToken(code);
    this.props.authenticateuser(code);
    
    console.log("code", code);
  };
  componentWillReceiveProps(nextProps){
    if(nextProps.authenticationDone){
      if(nextProps.authResponse&&nextProps.authResponse.userDetails&&nextProps.authResponse.userDetails.userRoleList&&
        nextProps.authResponse.userDetails.userRoleList.length>0){
        this.props.history.push('/dashboard')
      }else if(nextProps.authResponse&&nextProps.authResponse.userDetails&&
        nextProps.authResponse.currentUserRole===null&&
        nextProps.authResponse.userDetails.userRoleList&&nextProps.authResponse.userDetails.userRoleList.length===0){
          localStorage.setItem('approval-status','pending')
          this.props.history.push('/');
      }else{
        this.props.history.push('/signup?from=auth-page')
      }
    }
     }

  // const getForgeIdToken = async code => {
  //   try {
  //     let headers = {
  //       "Content-Type": "application/json",
  //       authorization: code
  //     };

  //     let res = await requestHandler(
  //       "POST",
  //       "http://localhost:4000/participants/getSentienceIamIdToken",
  //       JSON.stringify({}),
  //       {
  //         params: {},
  //         headers
  //       }
  //     );
  //     console.log(res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
 render(){
  return <div className="container">
  <div className="row">
    <Loader/>
    {
      this.props.ErrorMessage?<ErrorMessage page="Authenication"
       title='Error' message={this.props.ErrorMessage} open={true}/>:''
    }
    
  
  </div>
  </div>;
 }
  
};
const mapStateToProps=state=>{
  console.log('complete-state authenticate Reducer',state.authenticate);
  return{
    loading:state.authenticate.loading,
    ErrorMessage:state.authenticate.errorMessage,
    authResponse:state.authenticate.signinResponse,
    authenticationDone:state.authenticate.authenticationDone
  }
}
export default connect(mapStateToProps,{authenticateuser})(Auth);
