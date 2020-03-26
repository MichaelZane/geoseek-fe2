import React, {useState} from 'react'


function markComplete(gemId){
    const userID= localStorage.getItem('userID')
    let body={
        gem_id: gemId,
        completed_by: userID
    }
    console.log(body, 'body')
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/completed`, body)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
}