import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from "styled-components"

const Container = styled.div`
text-align: center;
color:white;
background-color: 

`

function UserDashboard(props){
    const [user, setUser]= useState([])
    const [completed, setCompleted]= useState([])
    const token= localStorage.getItem('userID')
    console.log( token)
    useEffect(() => {
        props.setRegLogRendered(true)
           
      }, [])

    useEffect(()=>{
        const abortEffect = new AbortController()//set-up for clean-up of useEffect
        const signal = AbortController.signal//set-up for useEffect clean-up
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/${token}`, { signal: signal } )
            .then(res=>{
                setUser(res.data)                
            })
            .catch(err=>{
                console.log(err)
                //clean-up iniitiated
                return function cleanup() {
                    abortEffect.abort()
                }
            })
    }, [])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/completed/completedByUser/${token}`)
            .then(res=>{
                console.log(res)
                setCompleted(res.data)
            })
            .catch(err=>{
                console.log(err)
                
            })
    }, [])
    
    return(
        <Container>
            <h1>placeholder for img</h1>
            <h1>Welcome back,{user.username}</h1>
            <p>You have found {completed.length} Gems. Good job!</p>
            {/* <button>Edit Profile</button> */}
            {/* <button onClick={viewCompleted}>View Your Completed Gems</button> */}
            {/* <div>
                {completed.map(gem=>{
                    return(
                        <div>
                            <h1>{gem.gem_id}</h1>
                            <p>{gem.completed_at}</p>
                            <p>{gem.comments}</p>
                        </div>
                    )
                })}
            </div> */}
        </Container>
    )
}

export default UserDashboard