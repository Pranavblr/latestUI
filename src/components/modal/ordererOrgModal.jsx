import React, { Component } from "react";

import { Modal, Button } from "@scuf/common";

class OrdererOrganizationModal extends Component {
  state = {
    openOrdererOrganizationModal: true
  };

  onCloseClicked = () => {
    this.props.showOrdererOrganizationModal(false);
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          closeIcon={true}
          onClose={this.onCloseClicked}
          open={this.state.openOrdererOrganizationModal}
          closeOnDimmerClick={false}
          size="small"
        >
          <Modal.Header>Orderer Organization Details</Modal.Header>
          <Modal.Content>
            <div>gggggggggggggggggggg</div>
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

export default OrdererOrganizationModal;
