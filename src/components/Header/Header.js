import React,{ useEffect } from "react";

import appleWeb from '../../images/apple-icon-web.png'

import Gallery from '../Gallery/Gallery';
import Roadmap from '../Roadmap/Roadmap'; 
import Footer from '../Footer/Footer';


import { Jumbotron, Row, Col,Container} from "reactstrap";
import "./Header.css";

function Header(props) {
    return (
      <Row>
       
        <Jumbotron className="header_body">
          <Col xs="12" sm="12">
            <div className="nav_container">
              <nav className="navbar navbar-default nav_container">
                <div class="container-fluid">
                  <div class="navbar-header">
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
            <div className="header_center">
              <h1 className="display-3">Welcome to GeoSeek!</h1>
              <h4 className="lead_p">
                Explore your city in a way you have never seen before.
              </h4>
              <h4 className="lead_p">
                {" "}
                seek out gems, create gems, discover new activities.
              </h4>
              <a href="https://testflight.apple.com/join/qcnyqBE0" target="_blank">
                <img src={appleWeb} alt="applelogo" />
              </a>
              <h3> Download our app</h3>
            </div>
          </Col>
          
        </Jumbotron>
        <Container>
        <Gallery/>
        <h2 className="lead2 gallery_content">
          Connect to our App to see more gems!
        </h2>
        <Roadmap/>
        <Footer/>
      </Container>
      </Row>
    );
  }

export default Header;
