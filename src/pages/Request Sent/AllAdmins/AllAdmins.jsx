import React, { Component } from 'react';
import { Grid, Card,Button } from '@scuf/common';
import {connect} from 'react-redux';

import userImage from '../../../assets/images/defaultUserImage.png';

import "./AllAdmins.css";
import {getAllRequestSentByUser} from '../../../actions/RoleRequest/RequestSent';
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
    componentDidMount(){
        this.props.getAllRequestSentByUser();
    }
    render() {
        let AllRequestSent = this.props.requestResponse&&this.props.requestResponse.userRoleRequests?
        this.props.requestResponse.userRoleRequests:[];
        console.log('all request sent',AllRequestSent);
        return (
            <div>
                {
                    this.props.loading?<Loader/>:''
                }
                <React.Fragment>
              <Grid>
                    <Grid.Row>
                    
                        { 
                        AllRequestSent&&AllRequestSent.length>0?
                           AllRequestSent.map(admin=>{
                                return(
                                    <Grid.Column width={3} mOrder={3} sOrder={1} >
                                    <Card>
                                        <Card.Content>
                                            <ul className="all-admin-content">
                                                <div className="user-img">
                                                   <img src={userImage} alt="Avatar" />
                                                </div>
                                                <div className="admin-details">
                                <p className="username">{admin.request.firstname} {admin.request.lastname}</p>
                                <p className="role">{admin.request.role===1?'Org Admin':'Network Admin'}</p>
                                                    <Button type="secondary"
                                                     content="View" />
                                                </div>
                                            </ul>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                                )
                            }):''
                        }
                     </Grid.Row>
                </Grid>
                </React.Fragment>
            </div>
        );
    }
}
export const mapStateToProps = state=>{
    console.log('Request sent api response',state.requestSent.requestResponse);
    return {
        loading:state.requestSent.loading,
        requestResponse:state.requestSent.requestResponse,
        errorResponse:state.requestSent.errorResponse
    }
}

export default connect(mapStateToProps,{getAllRequestSentByUser})(AllAdmins);