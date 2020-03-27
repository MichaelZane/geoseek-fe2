import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import axios from 'axios'

const Card = styled.div`
    text-align: center;
    h2 {
        margin: 10px;
        color: white;
    }
  `

function CompletedGemCard({completed, completed_at}) {
    const [namedGems, setNamedGems] = useState('')
    useEffect(() => {
        const id = completed
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/gems/${id}`)
            .then(res=>{
                setNamedGems(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
      }, [])
  
  return (
    <Card>
      <h2>{namedGems.title}</h2>
      <p>Lat: {namedGems.latitude}</p>
      <p>Lng: {namedGems.longitude}</p>
      <p>Description: {namedGems.description}</p>
      <p>Completed At: {completed_at}</p>
    </Card>
  );
}

export default CompletedGemCard;
  


