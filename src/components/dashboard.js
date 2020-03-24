import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import GemCard from './gem'

const Container= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
`

const CompletedGems= styled.div`
display: flex;
overflow-y: auto;
justify-content: space-evenly;
flex-wrap: wrap;
padding: 0px;
`

const Card = styled.div`
    margin: 15px;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color:#FF69B4;
  } 
  `

function UserDashboard(props){
    const [user, setUser]= useState([])
    const [completed, setCompleted]= useState([])
    const token= localStorage.getItem('userID')
    const [count, setCount]= useState('')
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
                setCompleted(res.data)
                setCount(res.data.length)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])

    function getGemName(id){
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/gems/${id}`)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    
    return(
        <Container>
            <h1>{user.username}</h1>
            <h2>You've completed {count} gems!</h2>
            <h2>You've created gems!</h2>
            <CompletedGems>
                {completed.map(gem=>{
                    return(
                        <Card>
                            <h1>Gem ID:{gem.gem_id}</h1>
                            <p>Completed at:{gem.completed_at}</p>
                            <p>{gem.comments}</p>
                            <button onClick={()=>getGemName(gem.gem_id)}>Get name</button>
                        </Card>
                    )
                })}
            </CompletedGems>
        </Container> 
    )
}

export default UserDashboard