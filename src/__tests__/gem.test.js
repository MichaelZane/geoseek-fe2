import React from 'react';
import { shallow } from 'enzyme'
import GemCard from '../components/gem'

describe('rendering gem card', () => {
    it('renders title', () => {
        let wrapper = shallow(<GemCard title={'test'}  /> )
        const title1 = wrapper.find('h2').text()
        expect(title1).toBe('test')
    })

    it('renders lat', () => {
        let wrapper = shallow(<GemCard /> )
        expect(wrapper.find('p')).toHaveLength(2)
    })
})