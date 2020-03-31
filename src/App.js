import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import CreateNetwork from "./pages/createnetwork/CreateNetwork";
import MonitorNetwork from "./pages/monitornetwork/MonitorNetwork";
import MyDashboard from "./pages/dashboard/Dashboard";
import ViewNetwork from "./pages/viewnetwork";
import OrgMspView from "./pages/orgsetup/orgmsp";
import "@scuf/common/honeywell/theme.css";
import "./App.css";
import Auth from "./pages/auth/Auth";
import NewDashboard from "./pages/newdashboard/NewDashboard";
import NetworkApplicationDetails from './pages/networkapplicationdetails/NetworkApplicationDetails';
import Users from "./pages/users/Users";
import RequestReceived from "./pages/RequestRecieved/RequestReceived";
import RequestSent from "./pages/Request Sent/RequestSent";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import SignUptest from "./pages/SignUptest/SignUptest";
import CreateNewRequest from './pages/CreateNewRequest/CreateNewRequest';
import privateRoute from './components/privateRoute/privateRoute';
import CreateOrgSetup from "./pages/createOrgSetup/CreateOrgSetup";
import CreateOrgSetUpForms from "./pages/createOrgSetUpForms/CreateOrgSetUpForms";


function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" {...props} component={Login} exact/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup} />
        <Route path="/signup-test" component={SignUptest} />
        <Route path="/signin" component={Signin}/>
        <Route path="/auth" component={Auth} exact/>
        <Route path="/home" component={Home} {...props} />
        <Route path="/create-orgSetup" component={CreateOrgSetup} />
        <Route path="/create-form-org-setup" component={CreateOrgSetUpForms} />
        <Route path="/network-application/details/:id" component={NetworkApplicationDetails}/>
        <Home>
          <Switch>
            <Route path="/dashboard"  component={NewDashboard} />
            {/* <Route path="/mydashboard" component={privateRoute(NewDashboard)} /> */}
            <Route path="/users" component={Users} />
            <Route path="/createnetwork" component={CreateNetwork} />
            <Route path="/monitornetwork" component={MonitorNetwork} />
            <Route path="/viewnetwork" component={ViewNetwork} />
            <Route path="/orgmsp" component={OrgMspView} />
            <Route path="/request-received" component={RequestReceived} />
            <Route path="/request-sent" component={RequestSent} />
            <Route path="/create-new-request"  component={CreateNewRequest} />
          </Switch>
        </Home>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
