import { Modal, Button } from '@scuf/common';
import React, { Component } from 'react';
import userImage from '../../../assets/images/defaultUserImage.png';
import {connect} from 'react-redux'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {acceptOrRejectRequest,getAllRequestReceivedByUser} from '../../../actions/RoleRequest/RequestRecieved';
import Loader from '../../../components/Shared/Loader/Loader';

class ViewProfile extends Component {
    handleClickClosePopUp = () => {
        this.props.handleClickClosePopUp();
        this.props.getAllRequestReceivedByUser();
    }
    acceptRejectTheRequest = (status,comments)=>{
      let requestData = {
        _id:this.props.requestDetails._id,
        request:{
          role:this.props.requestDetails.request.role
        },
        status:status,
        comments:comments
      }
      this.props.acceptOrRejectRequest(requestData)
    }
  
    render() {
      let requestDetails = this.props.requestDetails;
        return (
            // <div className="view-admin-popup">
                <Modal 
                closeOnDimmerClick={false} closeOnDocumentClick={false}onClose={() => this.handleClickClosePopUp()}
                    size="small" closeIcon={true} open={this.props.open}
                    className="view-admin-popup">
                    <Modal.Header>
                        <p className="header-title">Profile: Honeywell GDT</p>
                        <hr/>
                    </Modal.Header>
                    {
                      this.props.acceptorRejectLoading?
                      <Loader/>:''
                    }
                    <Modal.Content>
                      {
                        this.props.acceptorRejectRequestResponse?
                        <p>Request updated successfully.</p>:
                        <Container className="view-admin-details-content">
                        <p className="edit-profile">Edit Profile</p>
                        <div className="image">
                          <img src={userImage} alt="Avatar" />
                        </div>
                        <Row>
                           <Col md={6} sm={6}>
                           <ul class="name-value keys">
                             <li>
                               <label className="logbook-key">Name<span className="column-after-label"></span></label>
                             </li>
                              <li>
                                  <label className="logbook-key">Email ID<span className="column-after-label"></span></label>
                              </li>
                          
                               <li>
                                  <label className="logbook-key">User Display Name<span className="column-after-label"></span></label>
                              </li>
                               <li>
                                  <label className="logbook-key">Select Network<span className="column-after-label"></span></label>
                              </li>
                              <li>
                                  <label className="logbook-key">Role<span className="column-after-label"></span></label>
                              </li>
                              <li>
                                  <label className="logbook-key">Comments<span className="column-after-label"></span></label>
                              </li>
                          
                          </ul>
                          </Col>
                        
                            <Col md={6} sm={6}>
                            <ul className="name-value p-0 values">
                              
                                  <li>
                                 <label className="logbook_value" id="about">
                                    {requestDetails&&requestDetails.request?requestDetails.request.firstname:''}   {requestDetails&&requestDetails.request?requestDetails.request.lastname:''}</label>
                                 </li>
                                  <li>
                                     <label className="logbook_value" id="label1">{requestDetails&&requestDetails.request?requestDetails.request.email:''}</label>
                                  </li>
                                  <li>
                                   <label className="logbook_value"  id="label2">Honeywell GDT</label>
                                 </li>
                                <li>
                                  <label className="logbook_value" id="label2">PROD</label>
                                </li>
                                <li>
                                  <label className="logbook_value" id="label2">{requestDetails&&requestDetails.request?requestDetails.request.org.name:''}</label>
                                </li>
                                <li>
                                  <label className="logbook_value" id="label2">{requestDetails&&requestDetails.request?requestDetails.request.comments:''}</label>
                                </li>
                              </ul>
                            </Col>
                       </Row>
                      </Container>
                      }
                        

                    </Modal.Content>
                    
                    <Modal.Footer>
                      {
                        this.props.acceptorRejectRequestResponse?
                        <React.Fragment>
                        <Button type="secondary" size="small"
                            content="Close" onClick={()=>this.handleClickClosePopUp()} />
                             </React.Fragment>:
                             <React.Fragment>
                            <Button type="secondary" size="small"
                            content="Reject" onClick={()=>{this.acceptRejectTheRequest(2,'Rejecting')}} />
                        <Button type="primary" size="small"
                            content="Accept" onClick={()=>{this.acceptRejectTheRequest(1,'Approved')}}/>
                            </React.Fragment>
                      }
                        
                    </Modal.Footer>
                </Modal>
            // </div>
        );
    }
}
export const mapStateToProps=state=>{
  return {
    acceptorRejectLoading:state.requestReceived.acceptorRejectLoading,
    acceptorRejectRequestResponse:state.requestReceived.acceptorRejectRequestResponse
  }
}
export default connect(mapStateToProps,{acceptOrRejectRequest,getAllRequestReceivedByUser})(ViewProfile);