import React, { Component } from "react";
import { Modal, Button, Input } from "@scuf/common";

import "./OrganizationModal.css";

class OrganizationModal extends Component {
  state = {
    openOrganizationModal: true
  };

  onCloseClicked = () => {
    this.props.showOrganizationModal(false);
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          closeIcon={true}
          onClose={this.onCloseClicked}
          open={this.state.openOrganizationModal}
          closeOnDimmerClick={false}
          size="small"
        >
          <Modal.Header>Organization Details</Modal.Header>
          <Modal.Content>
            <div className="OrganizationModal-input-container">
              <Input
                className="OrganizationModal-input"
                label="Organization Name"
              />
              <Input className="OrganizationModal-input" label="MSP ID" />
              <Input className="OrganizationModal-input" label="Admin Name" />
            </div>
          </Modal.Content>
          <Modal.Footer>
            <Button
              type="secondary"
              size="medium"
              content="Cancel"
              onClick={this.onCloseClicked}
            />
            <Button
              type="primary"
              size="medium"
              content="Submit"
              onClick={this.onCloseClicked}
            />
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default OrganizationModal;
