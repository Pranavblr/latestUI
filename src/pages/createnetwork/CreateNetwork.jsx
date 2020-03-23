import React, { Component } from "react";

import { InputLabel, Input, Button, Table } from "@scuf/common";
import OrganizationModal from "../../components/modal/organizationModal";
import OrdererOrganizationModal from "../../components/modal/ordererOrgModal";

import "./CreateNetwork.css";

class CreateNetwork extends Component {
  state = {
    networkName: [],
    showOrgModal: false,
    showOrdererOrgModal: false
  };

  onNetwrokNameChange = e => {
    this.setState({ networkName: e });
  };

  onAddOrgBtnClicked = orgBtnClicked => {
    this.setState({ showOrgModal: orgBtnClicked });
  };

  onAddOrdererOrgBtnClicked = ordererOrgBtnClicked => {
    this.setState({ showOrdererOrgModal: ordererOrgBtnClicked });
  };

  renderOrgModal = () => {
    if (this.state.showOrgModal) {
      return (
        <OrganizationModal showOrganizationModal={this.onAddOrgBtnClicked} />
      );
    }
  };

  renderOrdererOrgModal = () => {
    if (this.state.showOrdererOrgModal) {
      return (
        <OrdererOrganizationModal
          showOrdererOrganizationModal={this.onAddOrdererOrgBtnClicked}
        />
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.renderOrgModal()}
        {this.renderOrdererOrgModal()}
        <div>
          <div className="CreateNetwork-network-container">
            <InputLabel label="Network Name" id="CreateNetwork-label" />
            <Input
              placeholder="enter name"
              onChange={this.onNetwrokNameChange}
            />
          </div>
          <div className="CreateNetwork-network-container">
            <Button
              type="primary"
              content="Organizations"
              iconRoot="building"
              icon="add"
              iconPosition="left"
              size="small"
              onClick={() => this.onAddOrgBtnClicked(true)}
            />
            <Button
              type="primary"
              content="Orderer Organizations"
              iconRoot="building"
              icon="add"
              iconPosition="left"
              size="small"
              onClick={() => this.onAddOrdererOrgBtnClicked(true)}
            />
          </div>
          <div className="Clr" />
          <div className="CreateNetwork-table-container">
            <Table>
              <Table.Header>
                <Table.HeaderCell content="Organization Name" />
                <Table.HeaderCell content="Organization Msp ID" />
                <Table.HeaderCell content="Organization Admin Name" />
                <Table.HeaderCell content="" />
              </Table.Header>
              <Table.Body>
                <p>No data added yet!</p>
              </Table.Body>
            </Table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateNetwork;
