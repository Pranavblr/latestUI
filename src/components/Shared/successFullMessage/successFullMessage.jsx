import React, { Component } from 'react';
import { Modal,Button,Icon } from '@scuf/common';
import {connect} from 'react-redux';
import './successFullMessage.css';
class SuccessFullMessage extends Component {
    constructor(props){
        super(props)
    }
    handleClose = ()=>{

    }
    render() {
        return (
            <Modal className={`popup-theme-wrap success-popup`} open={this.props.open} size="small">
                <Modal.Content>
                <h5>
                    {/* <span><img style={{height:"35px",width:"40px;"}}
                    className="notification-alert-image" src={NotificationAlert} alt="alert"/></span> */}
                    <span className="success-message-title"><Icon  name="check" size="medium" color="green"/>{this.props.title}</span>
                </h5>
                   {this.props.content}
                   <div className="success-content">
                     <p>{this.props.message}</p>
                   </div>
                </Modal.Content>
                <Modal.Footer>
                   <Button  onClick={()=>this.props.handleClickRedirect()}
                   type="primary"  size="small"  content="OK" />
                    
                   
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SuccessFullMessage;