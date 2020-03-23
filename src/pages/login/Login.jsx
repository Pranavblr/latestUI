import React from "react";
import { Button, Carousel, Header } from "@scuf/common";

import "./Login.css";

const Login = props => {

  

  const authenticate = (e) => {
    localStorage.clear();
    console.log('e', e)
    e.preventDefault()
    const qParams = [
      `client_id=Client_44659`,
      // `redirect_uri=http://localhost:9999/auth`,
      `redirect_uri=https://admindashboard.blockchain.honeywell.com/auth`,
      `response_type=code`,
      `scope=profile+openid+email+https://admindashboard.service.blockchain.honeywell.com/auth/service`
    ].join("&");
      const url = `https://qcwa.honeywell.com/as/authorization.oauth2?${qParams}`;
      window.location = (url);
  };
  const handleClickRedirectToRgisterationPage = ()=>{
    localStorage.clear();
     props.history.push('/signup?from=landing-page')
  }

  return (
    <section>
      <Header
        title="TrustFlow"
        className="login-header"
        collapseAtBreakpoint="xs"
        menu={false}
        onMenuToggle={() => {}}
      >
        <Header.Item>Home</Header.Item>
        <Header.Item>Learning</Header.Item>
        <Header.Item>Support</Header.Item>
        <Header.Item className={ localStorage.getItem('approval-status')==='pending'?'disable-register-link':''}  onClick={()=>{handleClickRedirectToRgisterationPage()}}>
        <Button type="secondary register" content="Register" />
        </Header.Item>
        {
         localStorage.getItem('approval-status')? 
         <React.Fragment>
         <Header.Item className="pending">
        {
          localStorage.getItem('approval-status')==='pending'?<a><span className="approval-status">* Pending Approval</span></a>:""
        }
        </Header.Item >
        </React.Fragment>:''
        }
        {  
        !localStorage.getItem('approval-status')?
        
           <Header.Item>
          <Button className="signin" onClick={ (e) => authenticate(e)}>Sign In</Button>
        </Header.Item>:''
        
           
        }
        
        
        {/* <Header.UserProfile firstName="H" lastName="W" role="Demolitions">
       </Header.UserProfile> */}
      </Header>
      <div className="container-fluid landing-page">
        <Carousel height={350}>
          <Carousel.Slide
            theme="light"
            image={require("../../assets/images/blockchain1.jpg")}
            title="TrustFlow"
            subtitle="Honeywell's Industrial Blockchain for Connected Solutions"
            content="Honeywell's TrustFlow platform orchestrates,monitors and records connected
            digital assets & workflows, making them secure, immutable and transparent"
          />
          <Carousel.Slide
            theme="light"
            image={require("../../assets/images/blockchain.jpg")}
            // image="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?fit=crop&fm=jpg&h=825&q=80&w=1325"
            title="TrustFlow"
            subtitle="Subtitle"
            content="Honeywell's TrustFlow platform orchestrates,monitors and records connected
            digital assets & workflows, making them secure, immutable and transparent"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Login;
