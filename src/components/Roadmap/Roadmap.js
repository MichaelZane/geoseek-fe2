import React from 'react';
import pinkGem from '../../images/pink-gem.png'
import './Roadmap.css';

import { Row, Col } from 'reactstrap';

function Roadmap() {
    return (
      <Row className="event_body">
          <Col xs="6" sm="8">
            <h2>What is GoeSeek </h2>
            <p className="lead gallery_content">
              GeoSeek is a mobile scavenger hunt, that is both interactive and filled with excitement. 
              <br/> 
              As a seeker you create and
              collect gems while simultaneously creating unique and memorable moments. 
              <br/>
              Fun for all ages.
            </p>
            <h2>Get Started</h2>
            <p className="lead gallery_content">
              Connecting with with family and friends as never been this simple. 
              <br/>
              Become a seeker and climb the leader board.
                <br/>
              </p>
            {/* <img className="event_left_img" src="./img/code-image.png"/> */}
          </Col>
         
          {/* <a href="https://testflight.apple.com/join/zBk3NnVo" target="_blank"> */}
           <img className="event_right_img" src={pinkGem} alt="PinkGem"/>
          {/* </a> */}
      </Row>
    );
}

export default Roadmap;