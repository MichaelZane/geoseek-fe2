import React from 'react';
import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json'

import ViewGem from '../components/viewGem'



 

 
describe('viewGem component', () => {
  let wrapper = shallow(<ViewGem /> )
  it('renders without crashing', () => {
      expect(wrapper).toBeDefined()
  })
  
  
});

 


