import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GemCard from "./gem";
import styled from "styled-components";

export default function ViewGem({ updatePosition }) {
  const [gems, setGems] = useState([]);
  useEffect(() => {
    axios
      .get(`https://${process.env.REACT_APP_DATABASE_URL}/api/gems`)
      .then(res => {
        console.log(res);
        setGems(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const Card = styled.div`
    margin: 20px;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    width: 250px;
    justify-content: space-between;
  `;

  const Container = styled.div`
    border-left: 2px solid black;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 350px;
    padding: 0px;
    max-height: 90%;

    height: 800px;
    overflow-y: auto;
  `;

  return (
    <Container>
      {gems.map(gem => {
        return (
          <div>
            <Card>
              <div>
                <GemCard
                  data-testid="gemcard"
                  key={gem.id}
                  title={gem.title}
                  latitude={gem.latitude}
                  longitude={gem.longitude}
                />
                <div
                  onClick={() => updatePosition(gem.latitude, gem.longitude)}
                >
                  <Link className="viewLink">Click To View Location</Link>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </Container>
  );
}
