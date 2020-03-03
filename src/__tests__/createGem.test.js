import mockCall from 'axios'
import createGem from '../components/createGem'
import {render, fireEvent, wait} from '@testing-library/react'
import renderer from 'react-test-renderer'

describe('create gem', ()=>{
    it('renders the create a gem form', async()=>{
        const form= renderer.create(<createGem/>)
        let tree= form.toJSON()
        expect(tree).toMatchSnapshot
    })
    it('submits', () => {
        const onSubmit = jest.fn();
        const { getByText } = render(<Form onSubmit={onSubmit} />);
        fireEvent.click(getByText('Add Gem!'));
        expect(onSubmit).toHaveBeenCalled();
    });
})