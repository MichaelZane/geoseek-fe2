import React, {useState} from 'react'
import axios from 'axios'

export default function CreateGem () {
    const [form, setForm] = useState({
        //created_by_user: '',
        title: '',
        
    })

    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            axios.post('https://geoseek-be-stage.herokuapp.com/api/gems', form)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{console.log(err)})
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
            <input
            name='title'
            placeholder='Title'
            value={form.name}
            onChange={(e)=>{
                setForm({
                    ...form,
            [e.target.name]:e.target.value
        })
            }}
            />
            <input
            name='longitude'
            placeholder='Logitude.'
            value={form.name}
            onChange={(e)=>{
                setForm({
                    ...form,
            [e.target.name]:e.target.value
        })
            }}
            />
            <input
            name='latitude'
            placeholder='Latitude.'
            value={form.name}
            onChange={(e)=>{
                setForm({
                    ...form,
            [e.target.name]:e.target.value
        })
            }}
            />
            <input
            name='difficulty'
            placeholder='Dificulty. 1-5'
            value={form.name}
            onChange={(e)=>{
                setForm({
                    ...form,
            [e.target.name]:e.target.value
        })
            }}
            />
            <input
            name='description'
            placeholder='Description.'
            value={form.name}
            onChange={(e)=>{
                setForm({
                    ...form,
            [e.target.name]:e.target.value
        })
            }}
            />
            <button type = 'submit'>Add Gem!</button>
        </form>
    )
}

