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
flex-wrap: wrap;
`


const Card = styled.div`
    padding: 10px;
    margin: 20px;
    border-radius: 5px;
    background-color:#30364a;
    box-shadow: 0 0px 6px 4px #FF69B4;
    .Popup{
        background-color: #3E4958;
    }
    .button{
        width: 350px;
  height: 50px;
  border-radius: 15px;
  outline: none;

  background-color: #ff69b4;
  border: none;
  color: white;
  text-align: center;
  font-size: 20px;
  margin: 15px auto;
  transition: 0.3s;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.55s ease-in-out;
  -moz-transition: opacity 0.55s ease-in-out;
  -webkit-transition: opacity 0.55s ease-in-out;
  :hover {
    opacity: 1;
    transition: opacity 0.55s ease-in-out;
    -moz-transition: opacity 0.55s ease-in-out;
    -webkit-transition: opacity 0.55s ease-in-out;
    background-color: #c66db2;
  }

  `
// Styled compnent for commented out pop up

//   const StyledPopup = styled(Popup)`
//   background-color: #3E4958;
//     .form{
//        display:flex; 
//        flex-direction: column;
//        justify-content: space-evenly;
       
//        background-color: #30364A;
//     }
//     .input{
//         width: 300px;
//     padding-left: 10px;
//     font-size: 0.9rem;
//     border: none;
//     height: 44px;
//     border-radius: 10px;
//     display: flex;
//     flex-direction: column;
//     margin: 15px auto;
//     background-color: #3e4958;
//     outline: none;
//     color: white;
//     }
//     .button{
//         width: 350px;
//   height: 50px;
//   border-radius: 15px;
//   outline: none;

//   background-color: #ff69b4;
//   border: none;
//   color: white;
//   text-align: center;
//   font-size: 20px;
//   margin: 15px auto;
//   transition: 0.3s;
//   text-decoration: none;
//   cursor: pointer;
//   transition: opacity 0.55s ease-in-out;
//   -moz-transition: opacity 0.55s ease-in-out;
//   -webkit-transition: opacity 0.55s ease-in-out;
//   :hover {
//     opacity: 1;
//     transition: opacity 0.55s ease-in-out;
//     -moz-transition: opacity 0.55s ease-in-out;
//     -webkit-transition: opacity 0.55s ease-in-out;
//     background-color: #c66db2;
//   }
//     }
//   `

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

                            {/*Pop Up retuns CORs error on submit can use for RC3 some back end adjustments needed for full functionality */}

                            {/* <StyledPopup modal trigger={<button className='button' >Edit Gem</button>} className = 'Popup'>
                                <form className = 'form' onSubmit={e => {
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
                                    <h1>Editing: {gem.title}</h1>
                                    <lable>Title</lable>
                                    <input
                                        name='title'
                                        placeholder='title'
                                        onChange={handleChange}
                                        className = 'input'
                                    />
                                    <lable>Longitude</lable>
                                    <input
                                        name='longitidue'
                                        placeholder='longitude'
                                        onChange={handleChange}
                                        className = 'input'
                                    />
                                    <lable>Latitude</lable>
                                    <input
                                        name='latitude'
                                        placeholder='latitude'
                                        onChange={handleChange}
                                        className = 'input'
                                    />
                                    <lable>Difficulty</lable>
                                    <input
                                        name='difficulty'
                                        placeholder='difficulty'
                                        onChange={handleChange}
                                        className = 'input'
                                    />
                                    <lable>Description</lable>
                                    <input
                                        name='description'
                                        placeholder='description'
                                        onChange={handleChange}
                                        className = 'input'
                                    />
                                    <button type='submit' className = 'button'>Submit Changes</button>
                                </form>
                            </StyledPopup> */}

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