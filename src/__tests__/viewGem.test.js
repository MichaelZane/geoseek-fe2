
import mockAxios from 'axios'

// import viewGem from '../components/viewGem'

import { cleanup, fireEvent, render} from '@testing-library/react'




it.skip('calls axios and returns a list of gems', async() => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data: { 
            results: []
        }
      })
    
    )
    const list = await viewGem('gems')
    expect(list).toEqual([])
})

