import React,{ useEffect } from "react";
// import appleWeb from "../../../public/img/apple-icon-web.png";
// import geoLogo from "../../../public/img/Logo1.png";
// import appleWeb from '../../img/apple-icon-web.png'
import {Link} from "react-router-dom"
import appleWeb from '../../images/apple-icon-web.png'

import Gallery from '../Gallery/Gallery';
import Roadmap from '../Roadmap/Roadmap'; // Dont delete
import Footer from '../Footer/Footer';


import { Jumbotron, Row, Col,Container} from "reactstrap";
import "./Header.css";

function Header(props) {
  useEffect(() => {
    props.setRegLogRendered(true);
  }, []);
    return (
      <Row>
       
        <Jumbotron className="header_body">
          <Col xs="12" sm="12">
            <div className="nav_container">
              <nav className="navbar navbar-default nav_container">
                <div class="container-fluid">
                  <div class="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle nav_custom_toggle"
                      data-toggle="collapse"
                      data-target="#myNavbar"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                   
                  </div>
                  <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </Col>
          <Col xs="12" sm="12">
            <br />
            <br />
            <center>
              <h1 className="display-3">Welcome to GeoSeek!</h1>
              <h4 className="lead_p">
                Explore your city in a new way, while seeking and hidding gems
                with friends.
              </h4>
              <h4 className="lead_p">
                {" "}
                seek out gems, create gems, discover new activities.
              </h4>
              <a href="google.com" target="_blank">
                <img src={appleWeb} alt="applelogo" />
              </a>
              <h3> Download our app now </h3>
            </center>
          </Col>
          
        </Jumbotron>
        <Container>
        <Gallery/>
        <h2 className="lead2 gallery_content">
          Connect to our App to see much more gems!
        </h2>
        <Footer/>
      </Container>
      </Row>
    );
  }

export default Header;
