import React, {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import { geocode, createGemAction } from '../actions/index copy'
import GeocodingRedux from './GeocodingRedux';

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
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 15px auto;
    background-color: #3E4958;
    outline: none;
    color: white;
    
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
//////////////////////////////////////////////////////////////////////////////
    function CreateGem (props) {

    const [newGem, setNewGem ] = useState({
        title: '',
        longitude: '' ,
        latitude: '',
        difficulty: '',
        description: ''
    })

    const [address, setAddress] = useState('')
    const handleAddressChanges = e =>{
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        })
    }

    // const submitGem = () => {
    //     props.setRefresh(!props.refresh);
    //     props.updatePosition(Number(newGem.latitude), Number(newGem.longitude));
    // }

    const handleChanges = e =>{
        setNewGem({
            ...newGem,
            [e.target.name]: e.target.value
        })
    }
    // const handleSubmit = e =>{
    //     e.preventDefault()
    //     props.postGem(newGem)
    //     setNewGem({
    //         title: '',
    //         longitude: '',
    //         latitude: '',
    //         difficulty: '',
    //         description: ''
    //     })
    //     // history.push('/');
    // }

 ////////////////////////     MY CODE FOR REDUX  //////////////////////////////////////

    // const handleSubmit = e =>{
    //     e.preventDefault()
    //     props.geocode(address)
    //     // createGemAction(newGem)
    //     setNewGem({
    //         ...newGem        
    //     })  
    // }
    // // console.log(props.coordinates, '*****these are the coordinates')
    // console.log( "********new gem-->", newGem, "<--new gem*********")
    // console.log('longitude.....', props.longitude, 'latitude.....', props.latitude, '&&&&&&&&&&&&&&&&&&')
    // console.log(newGem.longitude)


//-------------------------------- END OF MY REDUX ------------------------------------------------------------//

   const handleGeocodeSubmit = e => {
        e.preventDefault()
             function geocode (address) {
        axios
          .get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine=${address.address}&outFields=Match_addr,Addr_type`)
          .then(res => {
              console.log(res, '********get req********************')
              setNewGem(
               { ...newGem,
                longitude: res.data.candidates[0].location.x,
                latitude: res.data.candidates[0].location.y
            }
              )
            
        })  
          .catch(err => {
            console.log("***********************gecode err********************************", err)
          })
      }
      geocode(address)
  
        }
        console.log(newGem)

    return (
        <FormContainer>
            <form onSubmit={handleGeocodeSubmit}>
            

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
                    className='input'
                    name='title'
                    placeholder='Title'
                    value={newGem.name}
                    onChange={handleChanges}
                />
                

{/* <GeocodingRedux/> */}
<Label>ADDRESS</Label>
  <Input
            name='address'
            placeholder='Enter an address'
            onChange={handleAddressChanges}
            />
            {console.log('address state', address)}

                <Label>DIFFICULTY</Label>
                <Input
                    className='input'
                    name='difficulty'
                    placeholder='Choose 1-5 for difficulty '
                    value={newGem.name}
                    onChange={handleChanges}
                />
                <Label>DESCRIPTION</Label>
                <Input
                    className='input'
                    name='description'
                    placeholder='Describe or give clues to find your gem.'
                    value={newGem.name}
                    onChange={handleChanges}
                />
                <div><h1>Latitude: {newGem.latitude} <br /> Longitude: {newGem.longitude}</h1></div>
                <Button type='submit'>Create Gem!</Button>
            </form>
        </FormContainer>
    )
}

const mapStateToProps = state => {
    return{
        
        longitude: state.longitude,
        latitude: state.latitude,
        title: state.title,
        difficulty: state.difficulty,
        description: state.description
        
    }
} 
console.log('map state', mapStateToProps)

export default connect(mapStateToProps, 
    { geocode, createGemAction }
    )(CreateGem)



/////////////////// MY REDUX CODE COPY ///////////////////////


// function CreateGem (props) {



//     const [newGem, setNewGem ] = useState({
//             title: '',
//             longitude: '',
//             latitude: '',
//             difficulty: '',
//             description: ''
//     })

//     const handleChanges = e =>{
//         setNewGem({
//             ...newGem,
//             [e.target.name]: e.target.value
//         })
//     }
//     const handleSubmit = e =>{
//         e.preventDefault()
//         // props.postGem(newGem)
//         setNewGem({
//             title: '',
//             longitude: '',
//             latitude: '',
//             difficulty: '',
//             description: ''
//         })
//     }
    
//     return(
//         <form onSubmit={handleSubmit}>
//             <input
//             name='title'
//             placeholder='Title'
//             value={newGem.name}
//             onChange={handleChanges}
//             />

//             <GeocodingRedux/>

//             <input
//             name='difficulty'
//             placeholder='Dificulty. 1-5'
//             value={newGem.difficulty}
//             onChange={handleChanges}
//             />
//             <input
//             name='description'
//             placeholder='Description.'
//             value={newGem.description}
//             onChange={handleChanges}
//             />
//             <button type='submit'>Add Gem!</button>
//         </form>
//     )
// }
// const mapStateToProps = state => {
//     return{
//         state
//     }

// }

// export default connect(mapStateToProps, 
//     { postGem }
//     )(CreateGem)





///////////copy of form before changes for address
//     <form onSubmit={handleSubmit}>
//     <input
//     name='title'
//     placeholder='Title'
//     value={newGem.name}
//     onChange={(e)=>{
//         setNewGem({
//             ...newGem,
//     [e.target.name]:e.target.value
// })
//     }}
//     />
//     <input
//     name='longitude'
//     placeholder='Logitude.'
//     value={newGem.longitude}
//     onChange={handleChanges}
//     />
//     <input
//     name='latitude'
//     placeholder='Latitude.'
//     value={newGem.latitude}
//     onChange={handleChanges}
//     />
//     <input
//     name='difficulty'
//     placeholder='Dificulty. 1-5'
//     value={newGem.difficulty}
//     onChange={handleChanges}
//     />
//     <input
//     name='description'
//     placeholder='Description.'
//     value={newGem.description}
//     onChange={handleChanges}
//     />
//     <button type='submit'>Add Gem!</button>
// </form>
