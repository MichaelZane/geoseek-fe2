import React from 'react';
import ReactDOM from 'react-dom'
import MapGL, {mockGpsPath, mockPathColor, mockPathWidth, mockBearing } from 'react-map-gl'
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

jest.mock('react-map-gl', () => () => <div />)

describe('MapGL test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <div>
        <MapGL
          gpsPath={mockGpsPath}
          pathColor={mockPathColor}
          pathWidth={mockPathWidth}
          bearing={mockBearing}
        />
      </div>,
      div,
    )
  })
})