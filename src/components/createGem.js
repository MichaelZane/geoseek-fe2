import React, {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function CreateGem (props) {
    const FormContainer = styled.div`
    width: 20%;
    height: 76.9%;
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
     // margin: 10px auto;
    
    background-color: #C66DB2;
    border: none;
    color: white;
    // padding: 16px 32px;
    text-align: center;
    font-size: 20px;
    margin: 100px 0px 0px 25px;
    transition: 0.3s;
    text-decoration: none;
    cursor: pointer;


    :hover {
        opacity: 2
    }
    `
    const Form = styled.label`
        margin-left: 10%;
        color: white;
    `

    const [form, setForm] = useState({
        //created_by_user: '',
        title: '',
    })
    return (
        <FormContainer>
            <form onSubmit={(e) => {
                e.preventDefault()
                axios.post('https://geoseek-be-stage.herokuapp.com/api/gems', form)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {console.log(err)})
            }}>

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
                <Form>TITLE</Form>
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
                <Form>LONGITUDE</Form>
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
                <Form>LATITUDE</Form>
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
                <Form>DIFFICULTY</Form>
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
                <Form>DESCRIPTION</Form>
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
        </FormContainer>
    )
}

