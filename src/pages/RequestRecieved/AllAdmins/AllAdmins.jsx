import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Grid, Card,Button } from '@scuf/common';
import userImage from '../../../assets/images/defaultUserImage.png';
import  './AllAdmins.css';
import ViewProfile from './ViewProfile';
import {getAllRequestReceivedByUser} from '../../../actions/RoleRequest/RequestRecieved';
import Loader from '../../../components/Shared/Loader/Loader';

var alladmins = [
    {
        "username": "Alice",
        "role": "Engineer"
    },
    {
        "username": "Jhon",
        "role": "Production Head"
    },
    {
        "username": "James",
        "role": "Technician"
    },
    {
        "username": "Wessly",
        "role": "MRO"
    },
 
    
]
class AllAdmins extends Component {

    constructor(props){
        super(props);
        this.state={
            openViewDetails:false,
            selectedRequest:''
        }
    }
    componentDidMount(){
        this.props.getAllRequestReceivedByUser();
    }
    handleClickOpenViewDetails = (selectedRequest)=>{
        this.setState({
            openViewDetails:true,
            selectedRequest:selectedRequest
        })
    }
    closeViewDetailsPopUp = ()=>{
        this.setState({
            openViewDetails:false  
        })
    }
    
    render() {
        let filteredReceivedRequestByStatus;
        let AllReceivedRequest = this.props.requestResponse;
        if(AllReceivedRequest){
            filteredReceivedRequestByStatus = AllReceivedRequest.filter(request=>{
                if(request.status===0){
                    return request
                }else{
                    return false
                }
            })
            console.log('filtered recieved request by status',filteredReceivedRequestByStatus)  
        }
        
        return (
            <div>
                {
                    this.props.loading?
                    <Loader/>:''
                }
                <ViewProfile
                {...this.props}
                 requestDetails = {this.state.selectedRequest} 
                 handleClickClosePopUp={()=>this.closeViewDetailsPopUp()} open={this.state.openViewDetails}/>
                <Grid>
                    <Grid.Row>
                        {
                            filteredReceivedRequestByStatus.map((admin)=>{
                                return(
                                    <Grid.Column width={3} mOrder={3} sOrder={1} >
                                    <Card>
                                        <Card.Content>
                                            <ul className="all-admin-content">
                                                <div className="user-img">
                                                   <img src={userImage} alt="Avatar" />
                                                </div>
                                                <div className="admin-details">
                                                    <p className="username">{admin.request.firstname}</p>
                                                    <p className="role">{admin.role}</p>
                                                    <Button type="secondary"
                                                    onClick={()=>this.handleClickOpenViewDetails(admin)} content="View" />
                                                </div>
                                            </ul>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                                )
                            })
                        }
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
export const mapStateToProps=state=>{
    console.log('sample json',alladmins);
    console.log('the request received api response',state.requestReceived.requestResponse)
    return {
        loading:state.requestReceived.loading,
        requestResponse:state.requestReceived.requestResponse,
        errorResponse:state.requestReceived.errorResponse
    }
}
export default connect(mapStateToProps,{getAllRequestReceivedByUser})(AllAdmins);