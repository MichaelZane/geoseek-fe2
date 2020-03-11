import React from 'react';
import { cleanup } from '@testing-library/react';
import {Link} from "react-router-dom"
import { shallow, configure } from 'enzyme'
import expect, { createSpy } from 'expect';
import  NavBar  from '../components/NavBar'
import Adapter from 'enzyme-adapter-react-16';
import Logo from '../images/logo.png'


configure({ adapter: new Adapter() });

afterEach(cleanup)

describe('Navbar ', () => {
  it('renders component', () => {
    const wrapper = shallow(<NavBar/> )
    expect(wrapper).toBeDefined()
    expect(wrapper.find('button')).toHaveLength(2)
  
  })


})
describe('nav', () => {
  it('should have 2 links', () => {
    let wrapper = shallow(<NavBar />)
    expect(wrapper.containsAnyMatchingElements(<Link to ="/CreateGem">Create a Gem</Link>))
    expect(wrapper.containsAnyMatchingElements(<Link to ="/ViewGem">View Gems</Link>))
  })
  
})

