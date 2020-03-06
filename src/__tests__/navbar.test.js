import React from 'react';
import { mount, shallow, configure } from 'enzyme'
import NavBar from '../App' 

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('NavBar Component', () => {
 
    it('has an h1 tag', () => {
        
      const component = shallow(<NavBar/>);    
      var node = component.find('h1');
      expect(node.length).toEqual(1);
    //   console.log(node.debug())
  });
 
   
  })