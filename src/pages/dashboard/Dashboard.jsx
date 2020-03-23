import React, { Component } from "react";
import { Button } from "@scuf/common";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import "@scuf/common/honeywell/theme.css";
import "./Dashboard.css";

class MyDashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: 3
    };
  }

  handlePopUp = orgid => {
    var popup = document.getElementById(orgid);
    popup.classList.toggle("show");
  };

  handleChange = (value, event) => {
    console.log("On change clicked!");
    console.log(event.target.value);
    //console.log(value);
    this.setState({ value: event.target.value });
  };

  /* handleNetworkName = (networkId, selectedNetwork) => {
    const buttons = this.props.networkNameList;
    console.log("buttons", buttons);
    console.log("clickedButtonIndex", networkId);
    buttons.map((button, index) => {
      if (networkId !== index) {
        console.log("secondary");
      } else {
        console.log("primary");
      }
    });
  }; */

  render() {
    console.log("RENDER");
    console.log(this.props.nwdata_qa);
    console.log(this.props.nwdata_dev);
    console.log(this.props.nwdata_prod);

    console.log("STATE", this.state.value);

    let nwdata = {};

    if (this.state.value == 1) {
      console.log("In IF 1");
      nwdata = this.props.nwdata_qa;
    } else if (this.state.value == 2) {
      console.log("In IF 2");
      nwdata = this.props.nwdata_dev;
    } else if (this.state.value == 3) {
      console.log("In IF 3");
      nwdata = this.props.nwdata_prod;
    }

    //nwdata = this.props.nwdata_qa;

    console.log("sddfsdfdf", nwdata);

    return (
      <React.Fragment>
        <Container fluid={true}>
          <Row style={{ justifyContent: "space-between" }}>
            <div class="dashboard-title">Honeywell Blockchain Hub</div>
            <div class="dashboard-title">
              <ToggleButtonGroup
                type="checkbox"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <ToggleButton value={1}>QA</ToggleButton>
                <ToggleButton value={2}>Dev</ToggleButton>
                <ToggleButton value={3}>Prod</ToggleButton>
              </ToggleButtonGroup>

              {/* <Button.Group>
                  {this.props.networkNameList.map((networkName, index) => {
                    return (
                      <Button
                        id="aaa"
                        key={index}
                        content={networkName}
                        type="secondary"
                        size="small"
                        onClick={() =>
                          this.handleNetworkName(index, networkName)
                        }
                      />
                    );
                  })}
                </Button.Group> */}
            </div>
          </Row>
          <br />
          <br />
          {nwdata != undefined &&
          Object.keys(nwdata).length > 0 &&
          nwdata.constructor === Object ? (
            <div>
              {nwdata.value.map((item, index) => {
                return (
                  <Row>
                    <Col md={2}>
                      <label class="dashborad-channel-name">
                        {item.channels[0].name}
                        {/* use the below when api is integrated
                      {item.channels[index].name} */}
                      </label>
                    </Col>
                    <Col sm={12} md={8} lg={7} style={{ display: "flex" }}>
                      {/* use the below when api is integrated
                    {item.channels[index].orgs.map((itemorg, index2) => { */}
                      {item.channels[0].orgs.map((itemorg, index2) => {
                        return (
                          <div>
                            <label>{itemorg.participantId}</label>

                            {/* use the below when api is integrated
                          <label>{itemorg.name}</label> */}
                            <ul>
                              <li
                                className="popup"
                                onClick={() =>
                                  this.handlePopUp(itemorg._id, true)
                                }
                              >
                                <span className="popuptext" id={itemorg._id}>
                                  {itemorg.participantId +
                                    "\n" +
                                    itemorg.status +
                                    "\n" +
                                    itemorg.isapproved}
                                </span>
                              </li>
                            </ul>
                          </div>
                        );
                      })}
                    </Col>
                    <Col
                      sm={2}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Button
                        type="secondary"
                        content="Approve member"
                        size="small"
                        className="dashboard-btn"
                      />
                      <Button
                        type="secondary"
                        content="UPDATE CHANNEL"
                        size="small"
                        className="dashboard-btn"
                      />
                    </Col>
                  </Row>
                );
              })}
            </div>
          ) : null}
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log("dashboard mapStateToProps called ", state);

  if (state.network.data == null) {
    console.log("i was here");
    return { nwdata: {} };
  } else {
    console.log("I am NOT here!");
  }

  /* var networkNameList = state.network.data.value.map((item, index) => item._id);
  console.log("nwnamelist ", networkNameList);
 */
  // use below code when api is integrated
  // return { nwdata: state.network.data.data };

  let nwdata_qa = {};
  let nwdata_dev = {};
  let nwdata_prod = {};

  // Copying the entire object state.network.data into nwdata_qa, prod and dev.
  for (var k in state.network.data) nwdata_qa[k] = state.network.data[k];
  for (var k in state.network.data) nwdata_dev[k] = state.network.data[k];
  for (var k in state.network.data) nwdata_prod[k] = state.network.data[k];

  if (
    "value" in state.network.data &&
    Array.isArray(state.network.data.value)
  ) {
    let temp_qa = state.network.data.value.filter(function(item) {
      return item._id == "qa";
    });
    // Copying array from temp_qa to .value
    nwdata_qa.value = Array.from(temp_qa);

    let temp_dev = state.network.data.value.filter(function(item) {
      return item._id == "dev";
    });
    // Copying array from temp_qa to .value
    nwdata_dev.value = Array.from(temp_dev);

    let temp_prod = state.network.data.value.filter(function(item) {
      return item._id == "prod";
    });
    // Copying array from temp_qa to .value
    nwdata_prod.value = Array.from(temp_prod);
  }

  console.log(nwdata_qa);
  console.log(nwdata_dev);
  console.log(nwdata_prod);

  return {
    nwdata_qa: nwdata_qa,
    nwdata_dev: nwdata_dev,
    nwdata_prod: nwdata_prod
  };
};

export default connect(mapStateToProps)(MyDashboard);
