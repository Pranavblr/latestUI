import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Card } from '@scuf/common';
import { Input } from '@scuf/common';
import { DataTable } from '@scuf/datatable';
import { Switch, Route, Link } from 'react-router-dom';

import { getAllActiveUsers } from '../../../actions/users';
import Loader from '../../../components/Shared/Loader/Loader';
import FilterIcon from '../../../assets/images/Filter Control.svg';

import "./AllAdmins.css";

import Nav from 'react-bootstrap/Nav'

class AllAdmins extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: 3
        };
    }
    componentDidMount() {
        this.props.getAllActiveUsers();
    }
    render() {
        const activeUsers = this.props.activeUsersList?this.props.activeUsersList:[];
        let activeUsersList = [];
        activeUsers.forEach(user => {
            let userData = {
                'email': user.uid,
                'name': user.org,
                'role': user.role.name
            }
            activeUsersList.push(userData);
        });
        // const users = [{ "id": 1, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }, { "id": 2, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }, { "id": 3, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }, { "id": 4, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }, { "id": 5, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }, { "id": 6, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }, { "id": 7, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }, { "id": 8, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }, { "id": 9, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }, { "id": 10, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }, { "id": 11, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }, { "id": 12, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }, { "id": 13, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }, { "id": 14, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }, { "id": 15, "name": "Honeywell GDT", "email": "Keerthi.Jayarajan@Honeywell.com", "role": "Network Admin", "other": "..." }]
        return (
            <div className="all-admin-table">
                {
                    this.props.loading ? <Loader /> : ""
                }
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Card className="table-card">
                                <Input className="input-example" placeholder="Search for" search={true} />
                                <img src={FilterIcon} alt="" className="filter-icon"/>

                                <DataTable
                                    data={activeUsersList}
                                    resizableColumns={true}
                                    sortable={true}
                                >
                                    <DataTable.Column className="user-field name-field" field="name" header="NAME" sortable={true} />
                                    <DataTable.Column className="user-field" field="email" header="EMAIL" sortable={true} />
                                    <DataTable.Column className="user-field" field="role" header="ROLES" sortable={true} />
                                    <DataTable.Column className="user-field" field="other" header="OTHER" sortable={true} />
                                </DataTable>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('complete activeusersList reducer', state.activeUsersList)
    return {
        activeUsersList: state.activeUsersList.activeUsersList,
        loading: state.activeUsersList.loading
    }
}

export default connect(mapStateToProps, { getAllActiveUsers })(AllAdmins);