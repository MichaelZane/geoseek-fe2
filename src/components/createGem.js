import React, {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const FormContainer = styled.div`
width: 20%;
height: 87%;
background-color: #30364A;
border-left: 3px solid black;
padding-top: 30px;
`

const Input = styled.input`
    width: 300px;
    padding-left: 10px;
    font-size: .9rem;
    border: none;
    height: 44px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    margin: 15px auto;
    background-color: #3E4958;
    
    `

const Button = styled.button`
    width: 330px;
    height: 50px;
    border-radius: 15px;
   
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

export default function CreateGem (props) {

    const [form, setForm] = useState({
        //created_by_user: '',
        title: '',
        longitude: ''
    })

    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            axios.post('https://geoseek-be-test.herokuapp.com/api/gems', form)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{console.log(err)})
        }}>
            {/* <input
                {/* <input
            name='created_by_user'
            placeholder='created_by_user'
            value={}
            onChange={(e)=>{
                setForm({
                    ...form,
            [e.target.name]:e.target.value
        })
            }}
            /> */}
                <Label>TITLE</Label>
                <Input
                    name='title'
                    placeholder='The location to Mi booty'
                    value={form.name}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })
                    }}
                />
                <Label>LONGITUDE</Label>
                <Input
                    name='longitude'
                    placeholder='-77.086620'
                    value={form.name}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })
                    }}
                />
                <Label>LATITUDE</Label>
                <Input
                    name='latitude'
                    placeholder='-12.042120'
                    value={form.name}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })
                    }}
                />
                <Label>DIFFICULTY</Label>
                <Input
                    name='difficulty'
                    placeholder='Choose 1-5 for difficulty '
                    value={form.name}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })
                    }}
                />
                <Label>DESCRIPTION</Label>
                <Input
                    name='description'
                    placeholder=''
                    value={form.name}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })
                    }}
                />
                <Button type='submit'>Add Gem!</Button>
            </form>
    )
}

