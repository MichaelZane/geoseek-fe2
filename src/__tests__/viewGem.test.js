import React, {useState, useEffect} from "react";
import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
import mockAxios from 'axios'
import viewGem from '../components/viewGem'



it('calls axios and returns a list of gems', async() => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data: { 
            results: []
        }
      })
    
    )
    const list = await viewGem('gems')
    expect(list).toEqual([])
})
