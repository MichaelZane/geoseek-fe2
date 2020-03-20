import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const FormContainer = styled.div`
display: flex;
width: 99.5vw;
height: 88vh;
background-color: #30364A;
overflow-y: auto;

  .Link {
    text-decoration: none;
    outline: none;
  }
`;

const Button = styled.button`
  width: 330px;
  height: 50px;
  border-radius: 15px;
  outline: none;
  display:block;
  background-color: #ff69b4;
  border: none;
  color: white;
  text-align: center;
  font-size: 20px;
  margin: 100px auto 0px auto;
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
`;
const Label = styled.label`
  margin-left: 10%;
  color: white;
`;

const Input = styled.input`
  width: 300px;
  padding-left: 10px;
  font-size: 0.9rem;
  border: none;
  height: 44px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  background-color: #3e4958;
  outline: none;
  color: white;
`;
const RegisterDiv = styled.div`
    width: 100vw;
    height: 85vh;
`
const Form = styled.form`
border-left: 3px solid black;
    width: 100vw;
    
    h1 {
        margin: 70px 0px 80px 40px;
        color: white;
    }
    p {
        color: white;
        margin: 50px 0px 0px 0px;
        text-align: center;
    }
    .Form_Link {
        color: #FF69B4;
    }
`

function Login (props) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  function handleSubmit (form) {
    axios
      .post("https://geoseek-be-stage.herokuapp.com/api/users/login", form)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem('userID', res.data.user_id)
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleChange (e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    props.setRegLogRendered(true)
  }, [])
  return (
    <FormContainer>
        <RegisterDiv>
        <div className='RegLog_Hero_Image_Container'>
          <div className='Login_Hero_Image' />
          <div className='Hero_Text'>
            <h1 className='Hero_H1'>Welcome Back!</h1>
            <p className='Hero_P'>Sign in to find the hidden gems all around you.</p>
          </div>
        </div>
      </RegisterDiv>

      <Form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(form)
        props.history.push('/')
      }}>
        <h1>Sign in.</h1>
        <Label>Username:</Label>
        <Input
          name='username'
          placeholder='Username'
          onChange={(e) => {handleChange(e)}}
        />
        <Label>Password:</Label>
        <Input
          name='password'
          type='password'
          placeholder='Password'
          onChange={(e) => {handleChange(e)}}
        />
        <Button type='submit'>Log in</Button>
        <p>Don't have an account? <Link className='Form_Link' to='/Register'>Sign Up</Link></p>
      </Form>
    </FormContainer>
  )
}

export default Login;
