import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ViewGem({ updatePosition }) {
    const [gems, setGems] = useState([ ])

    useEffect(()=>{
        axios.get('https://geoseek-be-stage.herokuapp.com/api/gems')
        .then(res=>{
            console.log(res)
            setGems(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <div>
            {gems.map((gem)=> {
                return(
                <div onClick={()=>updatePosition(gem.latitude, gem.longitude)}>{gem.title} ,  ({gem.latitude}, {gem.longitude})</div> 
                )
            })}
        </div>
    )
}

