import React, {useState} from 'react'
import axios from 'axios'

export default function CreateGem () {
    const [form, setForm] = useState({
        //created_by_user: '',
        title: '',
        longitude: '',
        latitude: '',
        difficulty: '',
        description: ''
    })
    
    const [longitude,setLongitude] = useState();
    const [latitude, setLatitude] = useState();

    function geocode (address) {
        axios
          .get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine=${address}&outFields=Match_addr,Addr_type`)
          .then(res => {
              console.log(res)
            if (res) {
                setLongitude(res.data.candidates[0].location.x)
                setLatitude(res.data.candidates[0].location.y)
            }
        })
                
            
          .catch(err => {
            console.log("gecode err", err)
            setLongitude({ loading: "Problem geocoding, please try again" });
            setLatitude({ loading: "Problem geocoding, please try again" });
          })
      }
    

    
    console.log(`LONGITUDE!!!!! >>>> ${longitude}`)
    console.log(`LATITUDE!!!!! >>>> ${latitude}`)

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
            name='address'
            placeholder='Adress'
            value={form.name}
            onChange={(e)=>{
                geocode(e.target.value)
            }}
            />
            {/* <input
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
        /> */}
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
            <buttion ></buttion>
        </form>
    )
}

