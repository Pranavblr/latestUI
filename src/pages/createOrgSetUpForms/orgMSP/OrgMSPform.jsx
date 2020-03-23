import React, { Component } from 'react';
import { Grid, Card, Button, Input,Select } from '@scuf/common';
import {connect} from  'react-redux';

import ErrorMessage from '../../../components/Shared/ErrorMessage/ErrorMessage';
import Loader from '../../../components/Shared/Loader/Loader';
import cloudUploadIcon from '../../../assets/images/orgSetup/cloud_uplod.svg';

import {getUserInputs,getCAList,getSelectedCAcertificate} from '../../../actions/OrgSetUp/orgMSP';

const stateOptions = [ { value: 'AL', text: 'Alabama' }, {value: 'GA', text:'Georgia' }, {value:'HI', text:'Hawaii'} ];
class OrgMSPform extends Component {
    componentDidMount(){
        // this.props.getCAList();
    }
    getUserInputs = (key,value)=>{
        let InputObject = {
            key:key,
            value:value
        }
        this.props.getUserInputs(InputObject)
    }
    getSelectedCa = (value)=>{
       this.props.getSelectedCAcertificate(value)
    }
    render() {
        let orgName = localStorage.getItem('current-orgName');
        let mspId='MSP'+orgName;
        let caList = this.props.caList;
        var newCAlist=[];
        if(caList&&caList.length>0){
          for(var i=0;i<caList.length;i++){
            let newObject={
               value:caList[i]._id,
               text:caList[i].name
            }
            newCAlist.push(newObject);
          }
        }
        return (
            <div>
                <Grid className="form-grid">
                    {
                        this.props.errorResponse?
                        <ErrorMessage page="org-MSP" open={true} message={this.props.errorResponse}
                        title="Error"/>:''
                    }
                    {
                        this.props.loading?
                        <Loader/>:''
                    }
                <Grid.Row>
                    <Grid.Column width={6}>
                        <h5>Org MSP Configuration Parameters</h5>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>MSP Id</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Input className="form-input disabled" placeholder={mspId}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Select CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           {/* <Input className="form-input" placeholder="Admin Key"/> */}
                           <Select 
                           placeholder="Select a State" 
                           defaultValue={newCAlist&&newCAlist.length>0?newCAlist[0].value:''}
                           value={this.props.mspInputDeatils.ca}
                            options={newCAlist} onChange={(value)=> this.getSelectedCa(value)}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Org  Admin Enroll Id</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Input className="form-input" placeholder="Enroll Id"/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Org  Admin Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Input className="form-input" placeholder="Enroll Secret"/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Org  Admin Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Input className="form-input" placeholder="Admin Certificate"/>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input id="file-input" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Org  Admin Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Input className="form-input" placeholder="Admin Key"/>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input id="file-input" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Select TLS CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Input className="form-input" placeholder="Admin Key"/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
export const mapStateToProps = state=>{
    console.log('msp input details',state.orgMSP.mspInputDetails);
    return {
        errorResponse:state.orgMSP.errorResponse,
        loading:state.orgMSP.loading,
        caList:state.orgMSP.caList,
        mspInputDeatils:state.orgMSP.mspInputDetails
    }
}
export default connect(mapStateToProps,{getUserInputs,getCAList,getSelectedCAcertificate})(OrgMSPform);