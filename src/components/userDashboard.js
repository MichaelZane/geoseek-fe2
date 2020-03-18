import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function UserDashboard(){
    const [completed, setCompleted]= useState([])
    const token= localStorage.getItem('userID')
    useEffect(()=>{
        axios.get(`https://geoseek-be.herokuapp.com/api/completedByUser/${token}`)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
    })
    return(
        <div>
            user dash
        </div>
    )
}