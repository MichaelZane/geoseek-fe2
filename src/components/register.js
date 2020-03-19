import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import styled from 'styled-components'
import '../index.css'
import {Link} from 'react-router-dom'


const FormContainer = styled.div`

display: flex;
width: 99.5vw;
height: 87%;
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
    display: block;
   
   background-color: #ff69b4;
   border: none;
   color: white;
   text-align: center;
   font-size: 20px;
   margin: 100px auto 0px auto;
   transition: 0.3s;
   text-decoration: none;
   cursor: pointer;
   transition: opacity .55s ease-in-out;
   -moz-transition: opacity .55s ease-in-out;
   -webkit-transition: opacity .55s ease-in-out;

  :hover {
    opacity: 1;
    transition: opacity 0.55s ease-in-out;
    -moz-transition: opacity 0.55s ease-in-out;
    -webkit-transition: opacity 0.55s ease-in-out;
    background-color: #C66DB2;
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
        margin: 20px 0px 0px 0px;
        text-align: center;
    }
    .Form_Link {
        color: #FF69B4;  
    }

    .error {
      color: red;
      margin: 0;
      text-align: center;
    }
    
`

function Register (props) {
  const { register, handleSubmit, errors } = useForm();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  })

  console.log(errors);

  const onRegisterSubmit = form => {
    axios
      .post('https://geoseek-be-stage.herokuapp.com/api/users/register', form)
      .then(res => {
        console.log(res.data)
        props.history.push('/Login')
      })
      .catch(err => {console.log(err)})
  }

  useEffect(() => {
    props.setRegLogRendered(true)
  }, [])

  function handleChange (e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  
  
  return (
    <FormContainer>
      <RegisterDiv>
        <div className='RegLog_Hero_Image_Container'>
          <div className='Register_Hero_Image' />
          <div className='Hero_Text'>
            <h1 className='Hero_H1'>Join GeoSeek</h1>
            <p className='Hero_P'>The world is full of adventure. Come explore with us.</p>
          </div>
        </div>
      </RegisterDiv>

      <Form onSubmit={handleSubmit(onRegisterSubmit)}
      noValidate
      >
        <h1>Sign Up</h1>
        <Label>USERNAME</Label>
        <Input
          name='username'
          placeholder='Username'
          value={form.name}
          onChange={handleChange}
          ref={register({required: true, minLength: 4, maxLength: 20})} 
        />
        {errors.username && <p className='error' >❌ Your username is less than 4 characters ❗️</p>}
        <Label>EMAIL</Label>
        <Input
          name='email'
          type='email'
          placeholder='Email'
          value={form.name}
          onChange={handleChange}  
          ref={register({required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, minLength: 4, maxLength: 30
          })}
        />
        {errors.email && <p className='error' >❌ Must be a valid Email ❗️</p>}
        <Label>PASSWORD</Label>
        <Input
          name='password'
          type='password'
          value={form.name}
          placeholder='Password'
          onChange={handleChange} 
          ref={register({required: true, minLength: 4, maxLength: 20})} 
        />
        {errors.password && <p className='error' >❌ Your password is less than 4 characters ❗️</p>}
        <Button type='submit'>Register</Button>
        <p>Already have an account? <Link className='Form_Link' to='/Login'>Sign In</Link></p>
       
      </Form>
    </FormContainer>
  )
};

export default Register;
