import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import GemCard from './gem'
import CompletedGemCard from './completedGemCard'

const Container= styled.div`
width: 100vw;
text-align: center;
color: white;
`

const CompletedGems= styled.div`
margin-top: 50px;
display: flex;
overflow-y: auto;
justify-content: space-evenly;
flex-wrap: wrap;
padding: 0px;
`

const Card = styled.div`
    padding: 10px;
    margin: 20px;
    border-radius: 5px;
    background-color:#30364a;
    box-shadow: 0 0px 6px 4px #FF69B4;
  } 
  `

function UserDashboard(props){
    const [user, setUser]= useState([])
    const [completed, setCompleted]= useState([])
    const token= localStorage.getItem('userID')
    const [count, setCount]= useState('')

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

    return(
        <Container>
            <h1>{user.username}</h1>
            <h2>You've completed {count} gems!</h2>
            <CompletedGems>
                {completed.map(gem=>{
                    return(
                    <Card>
                        <CompletedGemCard completed={gem.gem_id} completed_at={gem.completed_at}/>
                    </Card>
                    )
                })}
            </CompletedGems>
        </Container> 
    )
}

export default UserDashboard;