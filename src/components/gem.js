import React from "react";
import styled from "styled-components";

const Gem = styled.div`
  color: white;
`;

function GemCard({ title, latitude, longitude }) {
  return (
    <Gem>
      <h2>{title}</h2>
      <p>Lat: {latitude}</p>
      <p>Lon: {longitude}</p>
    </Gem>
  );
}

export default GemCard;
