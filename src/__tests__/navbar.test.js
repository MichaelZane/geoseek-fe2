import React from 'react';
import { cleanup } from '@testing-library/react';

import { shallow, configure } from 'enzyme'
import App from '../App' 
import  NavBar  from '../components/NavBar'
import Adapter from 'enzyme-adapter-react-16';
import logo from '../images/logo.png'


configure({ adapter: new Adapter() });

afterEach(cleanup)

describe('Navbar ', () => {
  it('renders component', () => {
    const wrapper = shallow(<NavBar/> )
    expect(wrapper).toBeDefined()
    expect(wrapper.find('button')).toHaveLength(2)
  
  })


})
