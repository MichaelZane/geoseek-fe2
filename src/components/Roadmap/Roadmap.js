import React, { Component } from 'react';
import './Readmap.css';
import 'antd/dist/antd.css';
import { Timeline } from 'antd';

class Roadmap extends Component {
  render() {
    return (
    <div className="roadmap_body">
       <center>
        <h1 className="display-3">Roadmap</h1>
        <p className="lead gallery_content">We have a lot of exciting</p>
        <p className="lead gallery_content">stuff coming.Stay tuned!</p>       
        </center>
      <br/><br/><br/>
      <Timeline mode="alternate">
        <Timeline.Item><strong>Novemember:</strong>Early Stage Concept</Timeline.Item>
        <Timeline.Item><h4>2017</h4></Timeline.Item>
        <Timeline.Item>
              <strong>April:</strong> Concept Validation<br/>
              <strong>July:</strong> Development Kickoff<br/>
              <strong>Novermber:</strong> Prototype API
        </Timeline.Item>
        <Timeline.Item><h4>2018</h4></Timeline.Item>
        <Timeline.Item>
          <strong>March:</strong> First MVP with UI<br/>
          <strong>June:</strong> Official Launch
        </Timeline.Item>
        <Timeline.Item><h4>2019</h4></Timeline.Item>
      </Timeline>
     </div>
    );
  }
}

export default Roadmap;