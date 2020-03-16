import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'


const FormContainer = styled.div`
width: 20%;
height: 87%;
background-color: #30364A;
border-left: 3px solid black;
padding-top: 30px;

.Link {
    text-decoration: none;
    outline: none;
}
`

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

function Login (props) {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    function handleSubmit (form) {
        axios.post('https://geoseek-be-stage.herokuapp.com/api/users/login', form)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.token)
            })
            .catch(err => {console.log(err)})
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
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(form)
            }}>
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
            </form>
        </FormContainer>
    )
}

export default Login; 