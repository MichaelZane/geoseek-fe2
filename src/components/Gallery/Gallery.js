import React, { Component } from "react";

import "./Gallery.css";

import blueGem from '../../images/blue-gem.png'
import greenGem from '../../images/green-gem.png'
import orangeGem from '../../images/orange-gem.png'
import pinkGem from '../../images/pink-gem.png'
import purpleGem from '../../images/purple-gem.png'
import yellowGem from '../../images/yellow-gem.png'
import whiteGem from '../../images/white-gem.png'

import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class Gallery extends Component {
  render() {
    return (
      <Row>
        <center>
          {/* <br />
          <br />
          <br /> */}
          <h1 className="display-3">Welcome to GeoSeek!</h1>
          <p className="lead gallery_content">
            Discover unique adventures with different categorizes. Fun for all
            ages.
          </p>
          <p className="lead gallery_content">
            Gem colors represent categorizes that can be added or seeked.
          </p>
        </center>
        {/* <Col xs="12" sm="1" />
        <Col xs="12" sm="2"> */}
          <div className="gemConatiner">
          <Card>
            <CardImg className="Card"  src={blueGem} alt="Card image cap" />
            <CardBody>
              <CardTitle className="gallery_title">Family Fun</CardTitle>
              <CardText className="gallery_content">
                Themed adventures appropriate for all ages.
              </CardText>
            </CardBody>
          </Card>
        {/* </Col>
        <Col xs="12" sm="2"> */}
          <Card>
            <CardImg className="Card" src={orangeGem} alt="Card image cap" />
            <CardBody>
              <CardTitle className="gallery_title">Historical</CardTitle>
              <CardText className="gallery_content">
                Explore Historical monuments.
              </CardText>
            </CardBody>
          </Card>
        {/* </Col> */}
        {/* <Col xs="12" sm="2"> */}
          <Card>
            <CardImg className="Card" src={greenGem} alt="Card image cap" />
            <CardBody>
              <CardTitle className="gallery_title">Outdoors</CardTitle>
              <CardText className="gallery_content">
                Explore unique outdoors landmarks.
              </CardText>
            </CardBody>
          </Card>
        {/* </Col> */}
        {/* <Col xs="12" sm="2"> */}
          <Card>
            <CardImg className="Card" src={yellowGem} alt="Card image cap" />
            <CardBody>
              <CardTitle className="gallery_title">Cultural</CardTitle>
              <CardText className="gallery_content">
                Explore different Cultural
              </CardText>
            </CardBody>
          </Card>
        {/* </Col> */}
        {/* <Col xs="12" sm="2"> */}
          <Card>
            <CardImg className="Card" src={purpleGem} alt="Card image cap" />
            <CardBody>
              <CardTitle className="gallery_title">Night Life </CardTitle>
              <CardText className="gallery_content">
                {" "}
                Leave the kids at home and have fun
              </CardText>
            </CardBody>
          </Card>
          </div>
        {/* </Col> */}
        <Col xs="12" sm="1" />
      </Row>
    );
  }
}

export default Gallery;
