import React, { Component } from 'react';
import { Grid, Card, Button,Select} from '@scuf/common';
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
import OrdererHomePage from './Orderer/OrdererHomePage';
import OrdererForm from './Orderer/OrdererForm';
import ConfigurationParameterForm from './ConfigurationParameterForm';
import { navigateBetweenFormType } from '../../actions/orgSetUpMultipartFormNavigation';
import { createOrgMSP,exportOrgMSPdetails} from '../../actions/OrgSetUp/orgMSP';
import { createOrgCA,defaultOrgCAstate,exportOrgCA} from '../../actions/OrgSetUp/orgCA';
import { createPeersOfOrg } from '../../actions/OrgSetUp/orgConfiguration/orgPeer';
import { createOrderer } from '../../actions/OrgSetUp/orgConfiguration/orgOrderer';

import exportIcon from '../../assets/images/orgSetup/export.svg';
import editIcon from '../../assets/images/orgSetup/edit.svg';

const CAList = [ { value: 'AL', text: 'Alabama' }, {value: 'GA', text:'Georgia' }, {value:'HI', text:'Hawaii'} ];

class CreateOrgSetUpForms extends Component {
    constructor(props){
        super(props);
        this.state={
            currentFormHomepage:'orgCA'
        }
    }
    redirectHome = ()=>{
        this.props.history.push('/dashboard');
    }
    renderByFormType = () => {
        if (this.props.currentFormType === 0&& this.state.currentFormHomepage==='orgCA') {
            return <OrgCAhome handleClickAddCA={()=>this.handleClickShowForm()}/>
        }else if (this.props.currentFormType === 0&& this.props.caReducer.orgCARequestResponse===''&&
                  this.state.currentFormHomepage==='') {
            return <OrgCaForm />
        }else if(this.props.caReducer.orgCARequestResponse&&this.props.currentFormType===0&&
            this.state.currentFormHomepage===''){
                return <ViewOrgCAform response ={this.props.caReducer.orgCARequestResponse}/>
        }
        else if(this.props.currentFormType===1&&this.state.currentFormHomepage==='orgMSP'){
            return <OrgMSPhomePage handleClickAddMSP={()=>this.handleClickShowForm()}/>
        }else if (this.props.currentFormType === 1&&this.props.mspReducer.orgMSPRequestResponse==='') {
            return <OrgMSPform />
         }else if(this.props.mspReducer.orgMSPRequestResponse&&this.props.currentFormType === 1){
            return <ViewMSPform/>
        }

        else if(this.props.currentFormType===2&&this.state.currentFormHomepage==='orgPeer'){
            return <PeerHomePage  handleClickAddPeer={()=>this.handleClickShowForm()} />
        }
        else if(this.props.currentFormType===2&&this.props.orgPeerReducer.requestResponse===''){
            return <PeerForm/>
        }
        else if(this.props.currentFormType===3&&this.state.currentFormHomepage==='orgOrderer'){
            return <OrdererHomePage handleClickAddOrderer={()=>this.handleClickShowForm()}/>
        }
        else if (this.props.currentFormType === 3&&this.props.orgOrdererReducer.requestResponse==='') {
            return <OrdererForm/>
        } else {

        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.caReducer.orgCARequestResponse&&nextProps.currentFormType===0){
            this.renderByFormType();
        }else if(this.props.mspReducer.orgMSPRequestResponse&&this.props.currentFormType === 1){
            this.renderByFormType();
        }
        else if(this.props.orgPeerReducer.requestResponse&&this.props.currentFormType === 2){
            this.renderByFormType();
        }
        else if(this.props.orgOrdererReducer.requestResponse&&this.props.currentFormType === 3){
            this.renderByFormType();
        }
    }
    handleClickSave =()=>{
      if(this.props.currentFormType===0){
        this.props.defaultOrgCAstate()
        let caDetails = this.props.caReducer.CAinputDetails;
        this.props.createOrgCA(caDetails);
      }
      if(this.props.currentFormType===1){
        let mspDetails = this.props.mspReducer.mspInputDetails;
        this.props.createOrgMSP(mspDetails);
      }
      if(this.props.currentFormType===2){
          let orgPeerDetails = this.props.orgPeerReducer.peerInputDetails;
        this.props.createPeersOfOrg(orgPeerDetails);
      }
      if(this.props.currentFormType===3){
          let orgOrdererDetails = this.props.orgOrdererReducer.ordererInputDetails;
        this.props.createOrderer(orgOrdererDetails);
      }
    }
    setTheHomePageForForm=(formType)=>{
        if(formType===0){
            this.setState({
                currentFormHomepage:'orgCA'
            });
        }else if(formType===1){
            this.setState({
                currentFormHomepage:'orgMSP'
            });
        }
        else if(formType===2){
            this.setState({
                currentFormHomepage:'orgPeer'
            });
        }
        else if(formType===3){
            this.setState({
                currentFormHomepage:'orgOrderer'
            });
        }
    }
    handleClickNext = () => {
        window.scrollTo(0,0)
        // let orgPeerDetails = this.props.orgPeerReducer.peerInputDetails;
        // this.props.createPeersOfOrg(orgPeerDetails);

        // let orgOrdererDetails = this.props.orgOrdererReducer.ordererInputDetails;
        // this.props.createOrderer(orgOrdererDetails);
        // let caDetails = this.props.caReducer.CAinputDetails;
        // this.props.createOrgCA(caDetails);
        // let mspDetails = this.props.mspReducer.mspInputDetails;
        // this.props.createOrgMSP(mspDetails);
        let currentFormType = this.props.currentFormType;
        this.setTheHomePageForForm(currentFormType+1)
        this.props.navigateBetweenFormType(currentFormType + 1);
    }
    handleClickBack = () => {
        window.scrollTo(0,0)
        let currentFormType = this.props.currentFormType;
        this.setTheHomePageForForm(currentFormType - 1)
        this.props.navigateBetweenFormType(currentFormType - 1);
    }
    handleClickShowForm = ()=>{
       this.setState({
        currentFormHomepage:''
       })
    }
    navigateBetweenForms = (formType)=>{
            this.setTheHomePageForForm(formType)
            this.props.navigateBetweenFormType(formType);
           
    }
    handleClickExportOrgDetails = ()=>{
        if(this.props.currentFormType===0){
            this.props.exportOrgCA(this.props.caReducer.orgCARequestResponse);
        }else if(this.props.currentFormType===1){
           this.props.exportOrgMSPdetails();
        }
    }
    render() {
        return (
            <div>
                <Grid className="create-orgsetup">
                    <Grid.Row>
                        <Grid.Column>
                            <h2>Boeing  <span>Setup</span></h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column>
                      <p onClick={()=>this.redirectHome()}>Home</p>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={12}>

                            <Card className="org-setupform">
                                {/* <ul class="breadcrumb form-navigation">
                                <li>1.Org CA</li>
                                <li>2.Org MSP</li>
                                <li>3.Configuration Parameters</li>
                            </ul> */}
                                <Card.Content>
                                    <Grid.Row>
                                        <Grid.Column width={5}>
                                    <Tab defaultActiveIndex={0} onTabChange={(activeIndex)=>this.navigateBetweenForms(activeIndex)} activeIndex={this.props.currentFormType} >
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
                                    {
                                        this.state.currentFormHomepage?'':
                                        <React.Fragment>
                                            {
                                                this.props.caReducer.orgCARequestResponse&&this.props.currentFormType===0?
                                                <React.Fragment>
                                                <Grid.Column width={3}>
                                                <Select placeholder="Select a State" options={CAList} onChange = {(value)=> (alert(value))}/>
                                                </Grid.Column>
                                                <Grid.Column width={1} className="icon-div">
                                                        <span className="icons">
                                                        <img src={editIcon} alt=""/>
                                                      </span>
                                                    
                                                </Grid.Column>
                                                <Grid.Column width={1} className="icon-div">
                                                        
                                                      <span className="icons" onClick={()=>this.handleClickExportOrgDetails()}>
                                                        <img src={exportIcon} alt=""/>
                                                      </span>
                                                </Grid.Column>
                                                </React.Fragment>:'' 
                                            }
                                           
                                    <Grid.Column width={2}>
                                          
                                          
                                           { this.props.caReducer.orgCARequestResponse&&this.props.currentFormType===0? 
                                            <Button type="primary" className="view-top-icons" content="ADD CA" 
                                            onClick={()=>this.handleClickShowForm()} />:""}
                                        
{/*                                       
                                      <Button type="primary" content="ADD PEER" />
                                      <Button type="primary" content="ADD ORDERER" /> */}
                                    </Grid.Column>
                                        </React.Fragment>
                                    }
                                    
                                    </Grid.Row>
                                    <hr class="horizontal-line"/>

                                    {
                                        this.renderByFormType()
                                    }

                                    <br />
                                    {
                                        this.state.currentFormHomepage?'':
                                        <React.Fragment>
                                           <Grid>
                                        <Grid.Row className="buttons">
                                            <Grid.Column width={2}>
                                                <Button
                                                    className={`view-top-icons ${this.props.currentFormType <=0 ? 'disabled' : ''}`}
                                                    type="secondary" content="BACK" onClick={() => {
                                                        this.handleClickBack()
                                                    }} />
                                            </Grid.Column>
                                            {
                                             ((this.props.currentFormType === 0&& this.props.caReducer.orgCARequestResponse==='')||
                                             (this.props.mspReducer.orgMSPRequestResponse===''&&this.props.currentFormType === 1)||
                                             (this.props.currentFormType===2&&this.props.orgPeerReducer.requestResponse==='')||
                                             ( this.props.currentFormType===3&&this.props.orgOrdererReducer.requestResponse===''))?
                                             <React.Fragment>
                                                 <Grid.Column width={2}>
                                                <Button
                                                    className="view-top-icons"
                                                    type="primary" content="SAVE" onClick={() => {
                                                        this.handleClickSave()
                                                    }} />
                                            </Grid.Column>
                                             </React.Fragment> :
                                             <React.Fragment>
                                                 <Grid.Column width={2}>
                                                <Button
                                                    className={`view-top-icons ${this.props.currentFormType >=3 ? 'disabled' : ''}`}
                                                    type="primary" content="NEXT" onClick={() => {
                                                        this.handleClickNext()
                                                    }} />
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
        caReducer: state.orgCA,
        orgPeerReducer: state.orgPeer,
        orgOrdererReducer: state.orgOrderer,
        currentFormType: state.orgSetUpMultipartFormReducer.currentFormType
    }
}
export default connect(mapStateToprops,
    {
        navigateBetweenFormType, createOrgMSP, defaultOrgCAstate, createOrgCA, createPeersOfOrg,
        createOrderer,exportOrgMSPdetails,exportOrgCA
    })(CreateOrgSetUpForms);