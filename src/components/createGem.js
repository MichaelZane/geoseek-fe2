import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'


const FormContainer = styled.div`
  width: 40%;
  height: 87%;
  background-color: #30364a;
  border-left: 3px solid black;
  padding: 2% 2%;
`;

const Input = styled.input`
  width: 100%;
  padding-left: 1%;
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

const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  outline: none;

  background-color: #c66db2;
  border: none;
  color: white;
  text-align: center;
  font-size: 20px;
  margin: 100px 0px 0px 1px;

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
    background-color: #ff69b4;
    border: 2px solid black;
  }
`;
const Label = styled.label`
  margin-left: 1%;
  color: white;
`;

export default function CreateGem(props) {
  const [form, setForm] = useState({
    title: "",
    latitude: "",
    longitude: "",
    difficulty: "",
    description: ""
  });

    return (
        <FormContainer>
            <form onSubmit={(e) => {
                e.preventDefault();
                axios.post('https://geoseek-be.herokuapp.com/api/gems', form)
                    .then(res => {
                        submitGem();
                        props.history.push('/');
                    })
                    .catch(err => {console.log(err)})
            }}>

                
                <Label>TITLE</Label>
                <Input
                    className='input'
                    name='title'
                    placeholder='Title'
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
                    className='input'
                    name='longitude'
                    placeholder='Longitude'
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
                    className='input'
                    name='latitude'
                    placeholder='Latitude'
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
                    className='input'
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
                    className='input'
                    name='description'
                    placeholder='Describe or give clues to find your gem.'
                    value={form.name}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })
                    }}
                />
                <Button type='submit'>Create Gem!</Button>
            </form>
        </FormContainer>
    )
}
