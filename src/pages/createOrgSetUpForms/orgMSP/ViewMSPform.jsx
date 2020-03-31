import React, { Component } from 'react';
import { Grid, Card, Button, Select,Tab } from '@scuf/common';
import {connect} from  'react-redux';

import exportIcon from '../../../assets/images/orgSetup/export.svg';
import editIcon from '../../../assets/images/orgSetup/edit.svg';
import {navigateBetweenFormType} from '../../../actions/orgSetUpMultipartFormNavigation';
import {exportOrgMSPdetails} from '../../../actions/OrgSetUp/orgMSP';
class ViewMSPform extends Component {
    navigateBetweenForms = (formType)=>{
      this.props.setCurrentHomePage(formType);
      this.props.navigateBetweenFormType(formType);
    }
    handleClickExportOrgDetails = ()=>{
        this.props.exportOrgMSPdetails();
    }
    render() {
        
        let response = this.props.response;
        console.log('view-msp-form response', this.props.response)
        return (
            <div>
                <Grid className="form-grid">
                <Grid.Row>
                        <Grid.Column width={5}>
                            <Tab defaultActiveIndex={0} onTabChange={(activeIndex) => this.navigateBetweenForms(activeIndex)} activeIndex={this.props.currentFormType} >
                                <Tab.Pane title="Org CA" >
                                </Tab.Pane>
                                <Tab.Pane title="Org MSP" >
                                </Tab.Pane>
                                <Tab.Pane title="Peer" >
                                </Tab.Pane>
                                <Tab.Pane title="Orderer" >
                                </Tab.Pane>
                            </Tab>
                        </Grid.Column>
                        <Grid.Column width={5}>

                        </Grid.Column>
                        <Grid.Column width={1} className="icon-div">
                            <span className="icons">
                                <img src={editIcon} alt="" />
                            </span>
                        </Grid.Column>
                        <Grid.Column width={1} className="icon-div">

                            <span className="icons" onClick={() => this.handleClickExportOrgDetails()}>
                                <img src={exportIcon} alt="" />
                            </span>
                        </Grid.Column>
                    </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <h5>Org MSP Configuration Parameters</h5>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>MSP Id</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                         <p>{response.mspId?response.mspId:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Select Intermediate CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{response.intermediateCA!==null&&response.intermediateCA.name?response.intermediateCA.name:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    {/* <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Select Root CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{response.rootCA?response.rootCA:null}</p>
                        </Grid.Column>
                    </Grid.Row> */}
                    {/* <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Org  Admin Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>Certificate Name</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Org  Admin Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>Key Value</p>
                        </Grid.Column>
                    </Grid.Row> */}
                </Grid>
            </div>
        );
    }
}
export const mapStateToProps =state =>{
    return {
        currentFormType: state.orgSetUpMultipartFormReducer.currentFormType,
    }
}
export default connect(mapStateToProps,{navigateBetweenFormType,exportOrgMSPdetails})(ViewMSPform);