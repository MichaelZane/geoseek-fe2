import React, {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
    width: 330px;
    height: 50px;
    border-radius: 15px;
    outline: none;
   
   background-color: #C66DB2;
   border: none;
   color: white;
   text-align: center;
   font-size: 20px;
   margin: 100px 10px 0px 15px;
   transition: 0.3s;
   text-decoration: none;
   cursor: pointer;
   transition: opacity .55s ease-in-out;
   -moz-transition: opacity .55s ease-in-out;
   -webkit-transition: opacity .55s ease-in-out;

   :hover {
       opacity: 1.0;
       transition: opacity .55s ease-in-out;
       -moz-transition: opacity .55s ease-in-out;
       -webkit-transition: opacity .55s ease-in-out;
       background-color: #FF69B4;
       border: 2px solid black;
   }
   `
   const Label = styled.label`
       margin-left: 10%;
       color: white;
   `

const Input = styled.input`
    width: 300px;
    padding-left: 10px;
    font-size: .9rem;
    border: none;
    height: 44px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 15px auto;
    background-color: #3E4958;
    outline: none;
    color: white;
    `


export default function Register () {
    const [form,setForm] = useState({
        username: "",
        email: "",
        password:""
        })

        function handleSubmit(form){
            axios.post('https://geoseek-be-stage.herokuapp.com/api/users/register', form)
            .then(res=>{console.log(res)})
            .catch(err=>{console.log(err)})
        }

        function handleChange(e){
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }


    return (
        <form onSubmit = {handleSubmit(form)}>
            <Label>Username:</Label>
            <Input
            name='username'
            placeholder = 'Username'
            onChange= {handleChange(e)}
            />
            <Label>Email:</Label>
            <Input
            name='email'
            placeholder = 'Email'
            onChange= {handleChange(e)}
            />
            <Label>Password:</Label>
            <Input
            name='password'
            placeholder = 'Password'
            onChange= {handleChange(e)}
            />
            <Button type= 'submit'><Link to='/Login'>Register</Link></Button>
        </form>
    )
}