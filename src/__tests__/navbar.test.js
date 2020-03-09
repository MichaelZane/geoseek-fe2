import React from 'react';
import { shallow, configure } from 'enzyme'
import App from '../App' 
import  NavBar  from '../components/NavBar'
import { MemoryRouter } from "react-router-dom";

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('testing navbar ', () => {
  let wrapper 
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('includes a div with class navbar', () => {
    expect(wrapper.find('h1')).toContain('geoSeek')
  })
})    
