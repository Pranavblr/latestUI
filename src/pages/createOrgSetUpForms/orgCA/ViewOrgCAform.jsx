import React, { Component } from 'react';
import { Grid, Input, Tab, Select,Button} from '@scuf/common';
import { connect } from 'react-redux';

import { navigateBetweenFormType } from '../../../actions/orgSetUpMultipartFormNavigation';
import { getCADetailsById,exportOrgCA} from '../../../actions/OrgSetUp/orgCA';
import exportIcon from '../../../assets/images/orgSetup/export.svg';
import editIcon from '../../../assets/images/orgSetup/edit.svg';
import Loader from '../../../components/Shared/Loader/Loader';

class ViewOrgCAform extends Component {
    navigateBetweenForms = formType => {
        this.props.setCurrentHomePage(formType);
        this.props.navigateBetweenFormType(formType);
    }
    handleCAselectionChange = (Id) => {
        this.props.getCADetailsById(Id)
    }
    handleClickExportOrgDetails = ()=>{
       this.props.exportOrgCA(this.props.caReducer.getCAByIdresponse);
    }
    render() {
        let requestResponse = this.props.response;
        let caList = this.props.mspReducer.caList;
        var caListOptions = [];
        if (caList && caList.length > 0) {
            caList.map((ca) => {
                caListOptions.push({ value: ca._id, text: ca.name })
            })
        }
        console.log('view-ca-form-response', requestResponse);
        return (
            <div>
                {
                    this.props.getCAByidresponseLoading?
                    <Loader/>:''
                }
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
                        <Grid.Column width={3}>
                            <Select 
                            className="view-form-select"
                            placeholder="Select a State" defaultValue={this.props.caReducer.getCAByIdresponse._id} options={caListOptions}
                                onChange={(value) => this.handleCAselectionChange(value)} />
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
                        <Grid.Column width={2}>
                            <Button type="primary" className="view-top-icons" content="ADD CA" 
                                            onClick={()=>this.props.handleClickAddCA('orgCa')} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <h5>CA Node Configuration</h5>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            {/* <div className="label-text"> */}
                            <label>CA Name</label>
                            {/* </div> */}
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.name ? requestResponse.name : ''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>FQDN</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.fqdn ? requestResponse.fqdn : ''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select RCA</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.rootCA ? requestResponse.rootCA : ''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.serverCert ? requestResponse.serverCert.substring(0, 100) + "..."
                                : ''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.serverKey ? requestResponse.serverKey.substring(0, 100) + "..." : ''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    {/* <hr/> */}
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <h5>CA Admin Configuration</h5>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Id</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.enrollId ? requestResponse.enrollId : ''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.enrollSecret ? requestResponse.enrollSecret : ''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Admin Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.adminCert ? requestResponse.adminCert.substring(0, 100) + "..." : ''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Admin Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.adminKey ? requestResponse.adminKey.substring(0, 100) + "..." : ''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <h5>IP/Port Configuration</h5>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Server IP Address</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.ipAddress ? requestResponse.ipAddress : ''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Server Port</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.serverPort ? requestResponse.serverPort : ''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Operations Service Port</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.opServicePort ? requestResponse.opServicePort : ''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <h5>TLS Configuration</h5>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.enableTLSAuth === true ? 'ON' : 'OFF'}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.tlsServerCert ? requestResponse.tlsServerCert.substring(0, 100) + "..." : ''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.tlsServerKey ? requestResponse.tlsServerKey.substring(0, 100) + "..." : ''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Client TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.enableClientTLSAuth ? 'ON' : 'OFF'}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Operations TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.enableOpTLSAuth ? 'ON' : 'OFF'}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            {/* <div className="label-text"> */}
                            <label>Enable Operations Client TLS Authentication</label>
                            {/* </div> */}
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.enableOpClientTLSAuth ? 'ON' : 'OFF'}</p>
                        </Grid.Column>
                    </Grid.Row>
                    {
                        requestResponse.enableOpClientTLSAuth ?
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    {/* <div className="label-text"> */}
                                    <label>TLS Ops Client Root Certificate</label>
                                    {/* </div> */}
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <p>{requestResponse.tlsOpsRootCertId}</p>
                                </Grid.Column>
                            </Grid.Row> : ''
                    }


                </Grid>

            </div>
        );
    }
}
export const mapStateToProps = state => {
    return {
        mspReducer: state.orgMSP,
        caReducer: state.orgCA,
        getCAByidresponseLoading:state.orgCA.getCAByidresponseLoading,
        currentFormType: state.orgSetUpMultipartFormReducer.currentFormType,
    }
}

export default connect(mapStateToProps, { navigateBetweenFormType, getCADetailsById ,exportOrgCA})(ViewOrgCAform);