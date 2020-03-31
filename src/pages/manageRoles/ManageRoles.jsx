import React, { Component } from 'react';
import { Modal, Button, Select } from '@scuf/common';
import { connect } from 'react-redux';
import * as JWT from 'jsonwebtoken';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
    closeManageRolesPopUp, getSelectedRole, saveManageRolesCall,
    defaultManageRolesState
} from '../../actions/manageRoles';

import './ManageRoles.css';
import Loader from '../../components/Shared/Loader/Loader';

let roleListOption = [];
class ManageRoles extends Component {
    componentDidMount() {
        this.props.defaultManageRolesState()
    }
    handleClickClosePopUp = (action) => {
        if(action==='switched'){
            this.props.closeManageRolesPopUp();
            window.location.reload();
        }else{
            this.props.closeManageRolesPopUp();
        }
        
    }
    handleSelectOrg = (selectedId) => {
        this.props.getSelectedRole(selectedId)
    }
    handleClickSaveRole = () => {
        this.props.saveManageRolesCall(this.props.selectedUserId ? this.props.selectedUserId :
            (roleListOption && roleListOption.length > 0 && roleListOption[0].value ?
                roleListOption[0].value : ''));
    }
  
    render() {
        let roletoken = localStorage.getItem('roletoken')?localStorage.getItem('roletoken'):'';
        const decodedJwt = roletoken?JWT.decode(roletoken):"";
        console.log('decoded jwt',decodedJwt);
        roleListOption.length=0;
        let roleList = [];
        roleList.length =0;
        let DistinctroleList = [];
        DistinctroleList.length = 0;
        roleList = this.props.userRoleList&&this.props.userRoleList.length>0?
        this.props.userRoleList:JSON.parse(localStorage.getItem('current-userRoleList')?
        localStorage.getItem('current-userRoleList'):[]);
        if(decodedJwt){
            roleList.splice(0,0,decodedJwt);
        }
        for(let c=0;c<roleList.length;c++){
            if(c===0){
              DistinctroleList.push(roleList[c]);
            }
            for(let d=0;d<DistinctroleList.length;d++){
               if(roleList[c]._id===DistinctroleList[d]._id){
                   console.log('nothing')
               }else{
                DistinctroleList.push(roleList[c]);
               }
            }
        }
        console.log('current-user roleList',DistinctroleList)
        if(DistinctroleList&&DistinctroleList.length>0){
            for (let i = 0; i < DistinctroleList.length; i++) {
                let roleObject = {
                    "value": DistinctroleList[i]._id,
                    "text": DistinctroleList[i].org + '-' + DistinctroleList[i].role.name
                }
                roleListOption.push(roleObject);
            }
        }
        
        console.log('manageRoles-popup', this.props.userRoleList);
        return (
            <div>

                <Modal 
                closeOnDimmerClick={false} closeOnDocumentClick={false}
                onClose={() => this.handleClickClosePopUp('close')}
                    size="small" closeIcon={true} open={this.props.open}
                    className="view-admin-popup">
                    {
                        this.props.loading ?
                            <Loader /> : ''
                    }
                    <Modal.Header>
                        <div className="manage_heading">
                            <p className="header-title">Manage Roles</p>
                        </div>
                        <hr />
                    </Modal.Header>
                    <Modal.Content>
                        <React.Fragment>
                            {
                                this.props.manageRoleRequestResponse ?
                                    <p>Successfully switched the role</p> :
                                    <React.Fragment>
                                        <Container className="view-admin-details-content">
                                            <Row>
                                                <Col md={4} sm={4}>
                                                    <ul class="name-value keys">
                                                        <li>
                                                            <label className="logbook-key">Select Role<span className="column-after-label"></span></label>
                                                        </li>
                                                    </ul>
                                                </Col>

                                                <Col md={6} sm={6}>
                                                    <ul className="name-value p-0 values">

                                                        <li>
                                                            <label className="logbook_value" id="about">
                                                                <Select
                                                                    defaultValue={roleListOption && roleListOption.length > 0 && roleListOption[0].value ? roleListOption[0].value : ''}
                                                                    placeholder="Type To Search" options={roleListOption}
                                                                    search={true}
                                                                    onChange={(value) => { this.handleSelectOrg(value) }} />
                                                            </label>
                                                        </li>

                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </React.Fragment>

                            }
                        </React.Fragment>
                    </Modal.Content>
                    <Modal.Footer>
                        
                        {
                            !this.props.manageRoleRequestResponse?
                               <Button type="primary" size="small"
                            content="Save" onClick={() => {
                                this.handleClickSaveRole()
                            }} />:<Button type="secondary" size="small"
                            content="Close" onClick={() => this.handleClickClosePopUp('switched')} />
                        }
                        
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export const mapStateToProps = state => {
    console.log('full-manageRoles-reducer', state.manageRoles);
    return {
        userRoleList: state.authenticate.signinResponse && state.authenticate.signinResponse.userDetails &&
            state.authenticate.signinResponse.userDetails.userRoleList ?
            state.authenticate.signinResponse.userDetails.userRoleList : [],
        selectedUserId: state.manageRoles.selectedUserId,
        loading: state.manageRoles.loading,
        manageRoleRequestResponse: state.manageRoles.requestResponse
    }
}
export default connect(mapStateToProps, {
    closeManageRolesPopUp,
    getSelectedRole, saveManageRolesCall, defaultManageRolesState
})(ManageRoles);