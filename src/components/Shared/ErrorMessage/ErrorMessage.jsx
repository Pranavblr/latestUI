import React, { Component } from 'react';
import { Modal,Button} from '@scuf/common';
import {connect} from 'react-redux';

import NotificationAlert from '../../../assets/Error/notification-alert.svg';
import {RESET_AUTH_ERROR_POPUP,RESET_SIGNUP_ERROR_POPUP,CLOSE_CA_ERROR_POPUP,
    CLOSE_ORG_MSP_ERROR_POPUP,CLOSE_ORG_PEER_ERROR_POPUP,CLOSE_ORG_ODERER_ERROR_POPUP} from '../../../constants/actiontypes';

class ErrorMessage extends Component {
    handleClose  = ()=>{
        if(this.props.page==='Authenication'){
            this.props.closeAuthPopup();
        }else if(this.props.page==='signup'){
            this.props.closeSignUpPopUp();
        }else if(this.props.page==='orgCA-page'){
            this.props.closeCAErrorPopUp();
        }else if(this.props.page==='org-MSP'){
            this.props.closeMSPErrorPopUp();
        }else if(this.props.page ==='org-peer'){
            this.props.closePeerErrorPopUp();
        }else if(this.props.page==="org-Orderer"){
            this.props.closeOrdererErrorPopup()
        }
    }
    render() {
        return (
            <Modal className={`popup-theme-wrap error-popup`} open={this.props.open} size="small">
                <Modal.Content>
                <h5>
                    <span><img style={{height:"35px",width:"40px;"}}
                    className="notification-alert-image" src={NotificationAlert} alt="alert"/></span>
                    <span className="error-message-title">{this.props.title}</span>
                </h5>
                   {this.props.content}
                   <div className="error-content">
                     <p>{this.props.message}</p>
                   </div>
                </Modal.Content>
                <Modal.Footer>
                   <Button  onClick={()=>this.handleClose()}
                   type="primary" className="error-ok-button" size="small"  content="OK" />
                    
                   
                </Modal.Footer>
            </Modal>
        );
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        closeAuthPopup:()=>dispatch({type:RESET_AUTH_ERROR_POPUP}),
        closeSignUpPopUp:()=>dispatch({type:RESET_SIGNUP_ERROR_POPUP}),
        closeCAErrorPopUp:()=>dispatch({type:CLOSE_CA_ERROR_POPUP}),
        closeMSPErrorPopUp:()=>dispatch({type:CLOSE_ORG_MSP_ERROR_POPUP}),
        closePeerErrorPopUp:()=>dispatch({type:CLOSE_ORG_PEER_ERROR_POPUP}),
        closeOrdererErrorPopup:()=>dispatch({type:CLOSE_ORG_ODERER_ERROR_POPUP})
    }
}

export default connect(null,mapDispatchToProps)(ErrorMessage);