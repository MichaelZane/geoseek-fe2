import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import GemCard from './gem'
import CompletedGemCard from './completedGemCard'
import Popup from 'reactjs-popup'

const Container= styled.div`
width: 100vw;
text-align: center;
color: white;
`

const GemContainer= styled.div`
display: flex;
justify-content: center;
align-items: center;
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
    const [created, setCreated]= useState([])
    const [form, setForm]= useState({
        title: '',
        longitude: '',
        latitude: '',
        difficulty: '',
        description: ''
    })
    const [completedCount, setCompletedCount]= useState('')
    const [createdCount, setCreatedCount]= useState('')

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
                setCompletedCount(res.data.length)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/gems/byUser/${token}`)
            .then(res=>{
                setCreated(res.data)
                setCreatedCount(res.data.length)
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

    function handleChange(e) {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
        console.log(form)
      }
    
    return(
        <Container>
            <h1>{user.username}</h1>
            <h2>You've created {createdCount} gems and completed {completedCount} gems!</h2>
            <h2>Created:</h2>
            <GemContainer>
                {created.map(gem=>{
                    return(
                        <Card>
                            <h1>Title: {gem.title}</h1>
                            <h2>id: {gem.id}</h2>
                            <Popup modal trigger={<button>Edit Gem</button>}>
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    console.log(form)
                                    axios
                                        .put(`${process.env.REACT_APP_BACKEND_URL}/api/gems/${gem.id}`, form)
                                        .then(res => {
                                            console.log(res)
                                            props.history.push("/UserDash");
                                        })
                                        .catch(err => {
                                            console.log(err);
                                        });
                                }}>
                                    <h1>editing {gem.title}</h1>
                                    <lable>title</lable>
                                    <input
                                        name='title'
                                        placeholder='title'
                                        onChange={handleChange}
                                    />
                                    <lable>longitude</lable>
                                    <input
                                        name='longitidue'
                                        placeholder='longitude'
                                        onChange={handleChange}
                                    />
                                    <lable>latitude</lable>
                                    <input
                                        name='latitude'
                                        placeholder='latitude'
                                        onChange={handleChange}
                                    />
                                    <lable>difficulty</lable>
                                    <input
                                        name='difficulty'
                                        placeholder='difficulty'
                                        onChange={handleChange}
                                    />
                                    <lable>description</lable>
                                    <input
                                        name='description'
                                        placeholder='description'
                                        onChange={handleChange}
                                    />
                                    <button type='submit'>Submit Changes</button>
                                </form>
                            </Popup>
                        </Card>
                    )
                })}
            </GemContainer>
            <h2>Completed:</h2>
            <GemContainer>
                {completed.map(gem=>{
                    return(
                    <Card>
                        <CompletedGemCard completed={gem.gem_id} completed_at={gem.completed_at}/>
                    </Card>
                    )
                })}
            </GemContainer>
        </Container>
    )
}

export default UserDashboard;