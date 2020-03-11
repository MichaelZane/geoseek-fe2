import React from 'react';
import Enzyme from "enzyme"
import { shallow } from 'enzyme'
import CreateGem from '../components/createGem'
// import {render, fireEvent, wait} from '@testing-library/react'
// import renderer from 'react-test-renderer'

describe('create gem', ()=>{
    
    const wrapper = shallow(<CreateGem /> )
    expect(wrapper).toBeDefined()
     

    

})