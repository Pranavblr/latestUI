import React, { Component } from 'react';
import { Grid, Card, Button, Select,Header } from '@scuf/common';
import { connect } from 'react-redux';
import { Tab } from '@scuf/common';

import './CreateOrgSetUpForms.css';

import OrgCAhome from './orgCA/OrgCAhome';
import OrgCaForm from './orgCA/OrgCaForm';
import ViewOrgCAform from './orgCA/ViewOrgCAform';
import OrgMSPhomePage from './orgMSP/OrgMSPhomePage';
import OrgMSPform from './orgMSP/OrgMSPform';
import ViewMSPform from './orgMSP/ViewMSPform';
import PeerHomePage from './Peer/PeerHomePage';
import PeerForm from './Peer/PeerForm';
import ViewPeerForm from './Peer/ViewPeerForm';
import OrdererHomePage from './Orderer/OrdererHomePage';
import OrdererForm from './Orderer/OrdererForm';
import ViewOrdererForm from './Orderer/ViewOrdererForm';
import { navigateBetweenFormType } from '../../actions/orgSetUpMultipartFormNavigation';
import { createOrgMSP, addNewMSP, defaultOrgMSPstate } from '../../actions/OrgSetUp/orgMSP';
import { createOrgCA, defaultOrgCAstate, addNewCA } from '../../actions/OrgSetUp/orgCA';
import { createPeersOfOrg,addNewPeer } from '../../actions/OrgSetUp/orgConfiguration/orgPeer';
import { createOrderer,addNewOrderer} from '../../actions/OrgSetUp/orgConfiguration/orgOrderer';

const UserProfile = Header.UserProfile;
class CreateOrgSetUpForms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFormHomepage: 'orgCA',
        }
    }

    redirectHome = () => {
        window.location.href="/dashboard";
        // this.props.history.push('/dashboard');
    }
    renderByFormType = () => {
        
        let peersListLength =  (this.props.mspReducer.currentOrgDetails&&
        this.props.mspReducer.currentOrgDetails[0].peers&&this.props.mspReducer.currentOrgDetails[0].peers.length>0)?
        this.props.mspReducer.currentOrgDetails[0].peers.length:0

        if (this.props.currentFormType === 0 && this.state.currentFormHomepage === 'orgCA'
            && this.props.mspReducer.caList && this.props.mspReducer.caList.length === 0) {
            return <OrgCAhome
                setCurrentHomePage = {this.setTheHomePageForForm}
                handleClickAddCA={this.handleClickShowForm} />
        } else if (this.props.currentFormType === 0 && this.props.caReducer.orgCARequestResponse === '' &&
            this.state.currentFormHomepage === '') {
            return <OrgCaForm 
             setCurrentHomePage = {this.setTheHomePageForForm}/>
        } else if (this.props.caReducer.getCAByIdresponse && this.props.currentFormType === 0 && this.props.mspReducer.caList && this.props.mspReducer.caList.length > 0) {
            return <ViewOrgCAform
                setCurrentHomePage = {this.setTheHomePageForForm}
                handleClickAddCA={this.handleClickShowForm}
                response={this.props.caReducer.getCAByIdresponse} />
        }

        else if (this.props.currentFormType === 1 &&
            this.state.currentFormHomepage==='orgMSP'&&
            this.props.mspReducer.currentOrgDetails && this.props.mspReducer.currentOrgDetails[0].adminWids
            && this.props.mspReducer.currentOrgDetails[0].adminWids.length===0) {
            return <OrgMSPhomePage 
            setCurrentHomePage = {this.setTheHomePageForForm}
            handleClickAddMSP={this.handleClickShowForm} />
       } else if (this.props.currentFormType === 1 && this.props.mspReducer.orgMSPRequestResponse === ''
            && this.state.currentFormHomepage===''
            && this.props.mspReducer.currentOrgDetails && this.props.mspReducer.currentOrgDetails[0].adminWids
            && this.props.mspReducer.currentOrgDetails[0].adminWids.length===0) {
            return <OrgMSPform
            setCurrentHomePage = {this.setTheHomePageForForm}/>
        } else if ( this.props.mspReducer.currentOrgDetails && this.props.mspReducer.currentOrgDetails[0].adminWids
            && this.props.mspReducer.currentOrgDetails[0].adminWids.length>0&& this.props.currentFormType === 1) {
            return <ViewMSPform 
            response = {this.props.mspReducer.currentOrgDetails&&this.props.mspReducer.currentOrgDetails.length>0?
                this.props.mspReducer.currentOrgDetails[0]:{}}
            setCurrentHomePage = {this.setTheHomePageForForm}
            />
        }

        else if (this.props.currentFormType === 2&&
            this.state.currentFormHomepage==='orgPeer'&&
            this.props.mspReducer.currentOrgDetails && 
            this.props.mspReducer.currentOrgDetails[0].peers&&this.props.mspReducer.currentOrgDetails[0].peers.length===0) {
            return <PeerHomePage 
            setCurrentHomePage = {this.setTheHomePageForForm}
            handleClickAddPeer={this.handleClickShowForm} />
        }
        else if (this.props.currentFormType === 2 &&this.state.currentFormHomepage===''
            && this.props.orgPeerReducer.requestResponse === "") {
            return <PeerForm 
            setCurrentHomePage = {this.setTheHomePageForForm}/>
        }
        else if(this.props.currentFormType === 2&&
           peersListLength>0&&this.props.getPeerByIdrequestResponse){
            return <ViewPeerForm
            setCurrentHomePage = {this.setTheHomePageForForm}
            handleClickAddPeer={this.handleClickShowForm} 
            response = {this.props.getPeerByIdrequestResponse}
            />
        }

        else if (this.props.currentFormType === 3 && 
            this.state.currentFormHomepage==='orgOrderer'&&
        this.props.mspReducer.currentOrgDetails && 
        this.props.mspReducer.currentOrgDetails[0].orderers&&this.props.mspReducer.currentOrgDetails[0].orderers.length===0) {
            return <OrdererHomePage 
            setCurrentHomePage = {this.setTheHomePageForForm}
            handleClickAddOrderer={this.handleClickShowForm} />
        }
        else if (this.props.currentFormType === 3 && this.state.currentFormHomepage===''
            &&this.props.orgOrdererReducer.requestResponse === '') {
            return <OrdererForm 
            setCurrentHomePage = {this.setTheHomePageForForm}/>
        } 
        else if(this.props.getOrdererByIdrequestResponse&&this.props.currentFormType === 3&&this.props.mspReducer.currentOrgDetails && 
            this.props.mspReducer.currentOrgDetails[0].orderers&&this.props.mspReducer.currentOrgDetails[0].orderers.length>0){
            return <ViewOrdererForm
            setCurrentHomePage = {this.setTheHomePageForForm}
            handleClickAddOrderer={this.handleClickShowForm}
            response={this.props.getOrdererByIdrequestResponse} />
        }
    }
    componentWillReceiveProps(nextProps) {
        
        if ((nextProps.caReducer.getCAByIdresponse || nextProps.caReducer.orgCARequestResponse) && nextProps.currentFormType === 0) {
            this.renderByFormType();
        } else if (this.props.mspReducer.orgMSPRequestResponse && this.props.currentFormType === 1) {
            this.renderByFormType();
        }
        else if (this.props.orgPeerReducer.requestResponse || this.props.currentFormType === 2) {
            this.renderByFormType();
        }
        else if (this.props.orgOrdererReducer.requestResponse && this.props.currentFormType === 3) {
            this.renderByFormType();
        }
    }
    handleClickSave = () => {
        if (this.props.currentFormType === 0) {
            let caDetails = this.props.caReducer.CAinputDetails;
            if (caDetails.rootCA === null) {
                caDetails.rootCA = this.props.caList && this.props.caList.length > 0 ?
                    this.props.caList[0]._id : null;
            }
            if (caDetails.enableOpClientTLSAuth) {
                if (caDetails.tlsOpsRootCertId === null) {
                    caDetails.tlsOpsRootCertId = this.props.caList && this.props.caList.length > 0 ?
                        this.props.caList[0]._id : null;
                }
            }
            this.props.createOrgCA(caDetails);
        }
        if (this.props.currentFormType === 1) {
            let mspDetails = this.props.mspReducer.mspInputDetails;
            if (mspDetails.ca === null) {
                mspDetails.ca = this.props.caList && this.props.caList.length > 0 ?
                    this.props.caList[0]._id : null;
            }
            if (mspDetails.tlsCA === null) {
                mspDetails.tlsCA = this.props.caList && this.props.caList.length > 0 ?
                    this.props.caList[0]._id : null;
            }
            this.props.createOrgMSP(mspDetails);
        }
        if (this.props.currentFormType === 2) {
            let orgPeerInputDetailsDetails = [];
            let orgPeerDetails = this.props.orgPeerReducer.peerInputDetails;

            if(orgPeerDetails.enableTLSAuth&&orgPeerDetails.tlsServerRootCAId===""){
                orgPeerDetails.tlsServerRootCAId = 
                this.props.caList && this.props.caList.length > 0 ?
                    this.props.caList[0]._id : null;
            }else{
                orgPeerDetails.tlsServerRootCAId =null
            }
            if(orgPeerDetails.enableClientTLSAuth&&orgPeerDetails.tlsClientRootCAId===""){
                orgPeerDetails.tlsClientRootCAId = 
                this.props.caList && this.props.caList.length > 0 ?
                    this.props.caList[0]._id : null;
            } else{
                orgPeerDetails.tlsClientRootCAId =null
            }
            if(orgPeerDetails.enableOpTLSAuth&&orgPeerDetails.tlsOpsServerRootCAId===""){
                orgPeerDetails.tlsOpsServerRootCAId = 
                this.props.caList && this.props.caList.length > 0 ?
                    this.props.caList[0]._id : null;
            } else{
                orgPeerDetails.tlsOpsServerRootCAId = null
            }
            if(orgPeerDetails.enableOpClientTLSAuth&&orgPeerDetails.tlsOpsClientRootCAId===""){
                orgPeerDetails.tlsOpsClientRootCAId = 
                this.props.caList && this.props.caList.length > 0 ?
                    this.props.caList[0]._id : null;
            } else{
                orgPeerDetails.tlsOpsClientRootCAId = null
            }
            orgPeerInputDetailsDetails.push(orgPeerDetails);
            console.log('api-sending-data',orgPeerInputDetailsDetails);
            
            this.props.createPeersOfOrg(orgPeerInputDetailsDetails);
        }
        if (this.props.currentFormType === 3) {
            let orgOrdererInputDetailsDetails = []
            let orgOrdererDetails = this.props.orgOrdererReducer.ordererInputDetails;
            if(orgOrdererDetails.enableTLSAuth&&orgOrdererDetails.tlsServerRootCAId===""){
                orgOrdererDetails.tlsServerRootCAId = 
                this.props.caList && this.props.caList.length > 0 ?
                    this.props.caList[0]._id : null;
            }else{
                orgOrdererDetails.tlsServerRootCAId = null 
            }
            if(orgOrdererDetails.enableClientTLSAuth&&orgOrdererDetails.tlsClientRootCAId===""){
                orgOrdererDetails.tlsClientRootCAId = 
                this.props.caList && this.props.caList.length > 0 ?
                    this.props.caList[0]._id : null;
            } else{
                orgOrdererDetails.tlsClientRootCAId =null;
            }
            if(orgOrdererDetails.enableOpTLSAuth&&orgOrdererDetails.tlsOpsServerRootCAId===""){
                orgOrdererDetails.tlsOpsServerRootCAId = 
                this.props.caList && this.props.caList.length > 0 ?
                    this.props.caList[0]._id : null;
            } else{
                orgOrdererDetails.tlsOpsServerRootCAId =null
            }
            if(orgOrdererDetails.enableOpClientTLSAuth&&orgOrdererDetails.tlsOpsClientRootCAId===""){
                orgOrdererDetails.tlsOpsClientRootCAId = 
                this.props.caList && this.props.caList.length > 0 ?
                    this.props.caList[0]._id : null;
            } else{
                orgOrdererDetails.tlsOpsClientRootCAId = null
            }
            orgOrdererInputDetailsDetails.push(orgOrdererDetails);
            console.log('org-orderer-post-input-details',orgOrdererInputDetailsDetails);
            this.props.createOrderer(orgOrdererInputDetailsDetails);
        }
    }
    setTheHomePageForForm = (formType) => {
        
        if (formType === 0) {
            this.setState({
                currentFormHomepage: 'orgCA'
            });
        } else if (formType === 1) {
            this.setState({
                currentFormHomepage: 'orgMSP'
            });
        }
        else if (formType === 2) {
            this.setState({
                currentFormHomepage: 'orgPeer'
            });
        }
        else if (formType === 3) {
            this.setState({
                currentFormHomepage: 'orgOrderer'
            });
        }
    }
    handleClickNext = () => {
        window.scrollTo(0, 0)
        let currentFormType = this.props.currentFormType;
        this.setTheHomePageForForm(currentFormType + 1)
        this.props.navigateBetweenFormType(currentFormType + 1);
    }
    handleClickBack = () => {
        window.scrollTo(0, 0)
        let currentFormType = this.props.currentFormType;
        this.setTheHomePageForForm(currentFormType - 1)
        this.props.navigateBetweenFormType(currentFormType - 1);
    }
    handleClickShowForm = (Type) => {
        
        if (Type === 'orgCa') {
            this.props.defaultOrgCAstate()
            this.props.addNewCA();
            this.setState({
                currentFormHomepage: '',
            })
        }
        if (Type === 'orgMSP') {
            // this.props.navigateBetweenFormType(1,'')
            // this.props.defaultOrgMSPstate();
            // this.props.addNewMSP();
            this.setState({
                currentFormHomepage: '',
            },function(){
                this.props.defaultOrgMSPstate()
                this.props.addNewMSP();
            })
        }
        if(Type==='orgPeer'){
            this.props.addNewPeer();
            this.setState({
                currentFormHomepage: '',
            })
        }
        if(Type==='orgOrderer'){
            this.props.addNewOrderer();
            this.setState({
                currentFormHomepage: '',
            })
        }


    }
    extractTheFirstName = ()=>{
        let currentUserName = this.props.firstName?this.props.firstName:localStorage.getItem('firstName');
        let SplittedName = currentUserName?currentUserName.split(" "):[];
        return SplittedName.length>0?SplittedName[0].charAt(0).toUpperCase():"";
      }
      extractTheLastName = ()=>{
        let currentUserName = this.props.lastName?this.props.lastName:localStorage.getItem('LastName');
        let SplittedName = currentUserName?currentUserName.split(" "):[];
        return SplittedName.length>0?SplittedName[0][0].toUpperCase():"";
      }
    render() {
        return (
            <div>
                <Grid className="create-orgsetup">
                <Grid.Row>
                        <Header menu={false}
                            title="TrustFlow"
                            collapseAtBreakpoint="xs"
                        >
                            <UserProfile firstName={this.extractTheFirstName()} lastName={this.extractTheLastName()} role="Demolitions">
                                <UserProfile.Item active={true}>Active Item</UserProfile.Item>
                                <UserProfile.Item active={true}
                                >Manage Roles</UserProfile.Item>
                                <UserProfile.Item onClick={() => alert("Log Out")}>
                                    Log Out
                            </UserProfile.Item>
                            </UserProfile>
                        </Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <h2>{this.props.orgName ? this.props.orgName.toUpperCase() : (localStorage.getItem('current-orgName')?localStorage.getItem('current-orgName').toUpperCase():'')}  <span> &#x2192;  Setup</span></h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <p className="home-redirection" onClick={() => this.redirectHome()}>&#x2190; Home</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={12}>

                            <Card className="org-setupform">
                                <Card.Content>

                                    {
                                        this.renderByFormType()
                                    }
                                     

                                    <br />
                                    {
                                        this.state.currentFormHomepage ? '' :
                                            <React.Fragment>
                                                <Grid>
                                                    <Grid.Row className="buttons">
                                                        <Grid.Column width={2}>
                                                            <Button
                                                                className={`view-top-icons ${this.props.currentFormType <= 0 ? 'disabled' : ''}`}
                                                                type="secondary" content="BACK" onClick={() =>
                                                                    this.handleClickBack()
                                                                } />
                                                        </Grid.Column>
                                                        {
                                                            ((this.props.currentFormType === 0 && this.props.caReducer.orgCARequestResponse === '') ||
                                                                (this.props.mspReducer.orgMSPRequestResponse === '' && this.props.currentFormType === 1) ||
                                                                (this.props.currentFormType === 2 && this.props.orgPeerReducer.requestResponse === '') ||
                                                                (this.props.currentFormType === 3 && this.props.orgOrdererReducer.requestResponse === '')) ?
                                                                <React.Fragment>
                                                                    <Grid.Column width={2}>
                                                                        <Button
                                                                            className="view-top-icons"
                                                                            type="primary" content="SAVE" onClick={() =>this.handleClickSave()} />
                                                                    </Grid.Column>
                                                                </React.Fragment> :
                                                                <React.Fragment>
                                                                    <Grid.Column width={2}>
                                                                        <Button
                                                                            className={`view-top-icons ${this.props.currentFormType >= 3 ? 'disabled' : ''}`}
                                                                            type="primary" content="NEXT" onClick={() => this.handleClickNext()} />
                                                                    </Grid.Column>
                                                                </React.Fragment>
                                                        }

                                                    </Grid.Row>
                                                </Grid>
                                            </React.Fragment>
                                    }

                                </Card.Content>

                            </Card>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>
        );
    }
}
export const mapStateToprops = state => {
    console.log('current-fromType', state.orgSetUpMultipartFormReducer.currentFormType)
    return {
        mspReducer: state.orgMSP,
        caList: state.orgMSP.caList,
        caReducer: state.orgCA,
        orgPeerReducer: state.orgPeer,
        getPeerByIdrequestResponse:state.orgPeer.getPeerByIdrequestResponse,
        orgOrdererReducer: state.orgOrderer,
        currentFormType: state.orgSetUpMultipartFormReducer.currentFormType,
        currentFormPage:state.orgSetUpMultipartFormReducer.currentFormPage,
        orgName: state.authenticate.currentOrgName,
        getOrdererByIdrequestResponse: state.orgOrderer.getOrdererbyIdResponse
    }
}
export default connect(mapStateToprops,
    {
        navigateBetweenFormType, createOrgMSP, defaultOrgCAstate, createOrgCA, createPeersOfOrg,
        createOrderer, addNewCA, addNewMSP, defaultOrgMSPstate,addNewPeer,addNewOrderer
    })(CreateOrgSetUpForms);