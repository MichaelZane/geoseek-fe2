import React from "react";

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

function Gallery(){
    return (
      <Row>
        <center>
          <h1 className="display-3">Discover Gems</h1>
          <p className="lead gallery_content">
            Discover unique adventures with different categories.  Fun for all
            ages.
          </p>
          <p className="lead gallery_content">
           
          </p>
        </center>
       
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
       
          <Card>
            <CardImg className="Card" src={orangeGem} alt="Card image cap" />
            <CardBody>
              <CardTitle className="gallery_title">Historical</CardTitle>
              <CardText className="gallery_content">
                Explore historical monuments.
              </CardText>
            </CardBody>
          </Card>
       
          <Card>
            <CardImg className="Card" src={greenGem} alt="Card image cap" />
            <CardBody>
              <CardTitle className="gallery_title">Outdoors</CardTitle>
              <CardText className="gallery_content">
                Explore unique outdoors landmarks.
              </CardText>
            </CardBody>
          </Card>
        
          <Card>
            <CardImg className="Card" src={yellowGem} alt="Card image cap" />
            <CardBody>
              <CardTitle className="gallery_title">Cultural</CardTitle>
              <CardText className="gallery_content">
                Explore different Cultures.
              </CardText>
            </CardBody>
          </Card>
      
          <Card>
            <CardImg className="Card" src={purpleGem} alt="Card image cap" />
            <CardBody>
              <CardTitle className="gallery_title">Night Life </CardTitle>
              <CardText className="gallery_content">
                {" "}
                Leave the kids at home and have fun.
              </CardText>
            </CardBody>
          </Card>
          </div>
       
      </Row>
    );
  }

export default Gallery;
