import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SidebarLayout, Header, Icon } from "@scuf/common";
import {connect} from 'react-redux';

import "./Home.css";

import {getSelectedSideNav,getSelectedSubmenuItem} from '../../actions/navigation';
import {openManageRolesPopUp} from '../../actions/manageRoles';
import {getCAList} from '../../actions/OrgSetUp/orgCA';
import ManageRoles from "../manageRoles/ManageRoles";
const UserProfile = Header.UserProfile;
const Sidebar = SidebarLayout.Sidebar;

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarcollapsed: false,
      networksubmenucollapsed: false,
      setuporgsubmenucollapsed: false
    };
  }
  
  extractTheFirstName = ()=>{
    let currentUserName = this.props.firstName?this.props.firstName:localStorage.getItem('firstName');
    let SplittedName = currentUserName?currentUserName.split(" "):[];
    return SplittedName.length>0?SplittedName[0].charAt(0).toUpperCase():"";
  }
  extractTheLastName = ()=>{
    let currentUserName = this.props.lastName?this.props.lastName:localStorage.getItem('LastName');
    let SplittedName = currentUserName?currentUserName.split(" "):[];
    return SplittedName.length>1?SplittedName[0][0].toUpperCase():"";
  }
  handleClickToggleMenu = ()=>{
    const { sidebarcollapsed } = this.state;
    this.setState({
      sidebarcollapsed:!sidebarcollapsed
    })
  }
  handleItemClick = (selectedItem)=>{
    this.props.getSelectedSideNav(selectedItem);
  }
  handleClickSubMenuItem = (parentItem,item)=>{
    const {networksubmenucollapsed} = this.state;
    if(parentItem===item){
      this.setState({networksubmenucollapsed: !networksubmenucollapsed});
        // function(){
          this.props.getSelectedSubmenuItem(parentItem,item);
        // });
        console.log("equal parent and item",this.state.networksubmenucollapsed)
    }
    else{
         this.props.getSelectedSubmenuItem(parentItem,item);
         console.log("not equal parent and item",this.state.networksubmenucollapsed)
    } 
  }
  openManageYourRolesPopUp = ()=>{
     this.props.openManageRolesPopUp()
  }
  render() {
    const {
      sidebarcollapsed,
      networksubmenucollapsed,
      setuporgsubmenucollapsed
    } = this.state;

    return (
      <section>
        <Header
          title="TrustFlow"
          collapseAtBreakpoint="xs"
          onMenuToggle={() => {this.handleClickToggleMenu()}}
        >
          <UserProfile firstName={this.extractTheFirstName()} lastName={this.extractTheLastName()} role="Demolitions">
            <UserProfile.Item active={true}>Active Item</UserProfile.Item>
            <UserProfile.Item active={true} onClick={()=>{this.openManageYourRolesPopUp()}}
            >Manage Roles</UserProfile.Item>
            <UserProfile.Item onClick={() => alert("Log Out")}>
              Log Out
            </UserProfile.Item>
          </UserProfile>
        </Header>

        {
          <ManageRoles open={this.props.mangeRolesPopUpOpen}/>
        }
        <SidebarLayout collapsed={sidebarcollapsed}>
          {console.log("collapse", this.state.sidebarcollapsed)}
          {console.log("submenu-open", this.state.networksubmenucollapsed)}
          <Sidebar>
            <Link to="/dashboard">
              <Sidebar.Item
                content="Home"
                iconRoot="building"
                icon="home"
                className={this.props.selectedItem==='Home'?"selectedItem":''}
                onClick={()=>this.handleItemClick("Home")}
              />
            </Link>
            {/* <Link to="/request-received"> */}
            <Sidebar.Submenu
              content="Role Request"
              iconRoot="building"
              icon="star"
              open={this.state.networksubmenucollapsed}
              // open={true}  
              // className={this.props.selectedItem==='Role Request'?"selectedItem":''}
              onClick={() =>this.handleClickSubMenuItem("Role Request","Role Request")}
            >
              
              <Link to="/request-received">
                <Sidebar.Item
                  content="Request Received"
                  iconRoot="aero"
                  icon="ac-glider"
                  className={this.props.subMenu==='Request Received'?'Selected':''}
                  onClick={() =>this.handleClickSubMenuItem("Role Request","Request Received")}
                />
              </Link>
              <Link to="/request-sent">
                <Sidebar.Item
                  content="Request Sent"
                  iconRoot="aero"
                  icon="ac-glider"
                  className={this.props.subMenu==='Request Sent'?'Selected':''}
                  onClick={() =>this.handleClickSubMenuItem("Role Request","Request Sent")}
                />
              </Link>
              <Link to="/create-new-request?from=new-request">
                <Sidebar.Item
                  content="Create Role Request"
                  iconRoot="aero"
                  icon="ac-glider"
                  className={this.props.subMenu==='Create Role Request'?'Selected':''}
                  onClick={() =>this.handleClickSubMenuItem("Role Request","Create Role Request")}
                />
              </Link>
              {/* <Link to="/monitornetwork">
                <Sidebar.Item
                  content="Monitor Network"
                  iconRoot="aero"
                  icon="ac-glider"
                />
              </Link> */}
              
            </Sidebar.Submenu>
            {/* </Link> */}
            <Link to="/users">
              <Sidebar.Item
                content="Users"
                iconRoot="user"
                icon="user"
                className={this.props.selectedItem==='Users'?"selectedItem":''}
                onClick={()=>this.handleItemClick("Users")}
              />
            </Link>
            {/* <Sidebar.Submenu
              content="Setup Org"
              iconRoot="building"
              icon="star"
              open={setuporgsubmenucollapsed}
              onClick={() =>
                this.setState({
                  setuporgsubmenucollapsed: !this.state.setuporgsubmenucollapsed
                })
              }
            >
              <Link to="/canode">
                <Sidebar.Item content="CA" iconRoot="aero" icon="ac-glider" />
              </Link>
              <Link to="/orgmsp">
                <Sidebar.Item
                  content="Org MSP"
                  iconRoot="aero"
                  icon="ac-glider"
                />
              </Link>
              <Link to="/peernode">
                <Sidebar.Item content="Peer" iconRoot="aero" icon="ac-glider" />
              </Link>
              <Link to="/orderernode">
                <Sidebar.Item
                  content="Orderer"
                  iconRoot="aero"
                  icon="ac-glider"
                />
              </Link>
            </Sidebar.Submenu> */}
            <Link to="/channel">
              <Sidebar.Item 
              content="Channel" iconRoot="building" icon="home"
              className={this.props.selectedItem==='Channel'?"selectedItem":''}
              onClick={()=>this.handleItemClick("Channel")}
               />
            </Link>
            <Link to="/chaincode">
              <Sidebar.Item
                content="Chaincode"
                iconRoot="building"
                className={this.props.selectedItem==='Chaincode'?"selectedItem":''}
                onClick={()=>this.handleItemClick("Chaincode")}
                icon="home"
              />
            </Link>
          </Sidebar>
          <SidebarLayout.Content>{this.props.children}</SidebarLayout.Content>
        </SidebarLayout>
      </section>
    );
  }
}
export const mapStateToProps=state=>{
  console.log('complete navigation reducer',state.navigation);
  return {
    selectedItem:state.navigation.selectedItem,
    subMenu:state.navigation.subMenu,
    mangeRolesPopUpOpen:state.manageRoles.openManageRolesPopup,
    firstName: state.signUp.userDetails.firstname,
    lastName: state.signUp.userDetails.lastname,
  }
}
export default connect(mapStateToProps,
  {getSelectedSideNav,getSelectedSubmenuItem,openManageRolesPopUp,getCAList})(home);
