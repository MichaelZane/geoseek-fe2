import React from "react";
import styled from "styled-components";

const Gem = styled.div`
  color: white;
`;

function GemCard({ title, latitude, longitude, description }) {
  return (
    <Gem>
      <h2>{title}</h2>
      <p>Lat: {latitude}</p>
      <p>Lon: {longitude}</p>
      <p>Description: {description}</p>
    </Gem>
  );
}

export default GemCard;
