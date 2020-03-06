import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import GemCard from './gem'
import styled from 'styled-components'

export default function ViewGem ({updatePosition}) {
    const [gems, setGems] = useState([])
    useEffect(() => {
        axios.get('https://geoseek-be-stage.herokuapp.com/api/gems')
            .then(res => {
                console.log(res)
                setGems(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const Card = styled.div`
    border: 2px solid black;
    box-shadow: 5px 10px 18px black;
    background-color: #C66DB2;
    margin: 20px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    width: 200px;
    justify-content: space-between;
    flex-direction: column;
    `

    const Container = styled.div`
    border-left: 2px solid black;
    display: flex;
    overflow-y: auto;
    background-color:  #30364A;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 40%;
    padding: 0px;
    max-height: 100%;
    min-height: 100vh;
    height: 100vh;
    `

    const ViewLocation= styled.button`
    margin: 0px 25px;
    font-size: 1.5rem;
    border-radius: 10px;
    color: black;
    text-align: center;
    font-size: 20px;
    transition: 0.3s;
    text-decoration: none;
    cursor: pointer;
    border: 2px solid black;
    background-color: #FF69B4;
    :hover {
        opacity: 1.0;
        transition: opacity .55s ease-in-out;
        -moz-transition: opacity .55s ease-in-out;
        -webkit-transition: opacity .55s ease-in-out;
        background-color: #FF69B4;
        border: 2px solid white;
        color: white;
    }
    `
    return (
        <Container>
            {gems.map((gem) => {
                return (
                    <Card>
                        <GemCard key={gem.id} title={gem.title} latitude={gem.latitude} longitude={gem.longitude} />
                        <div onClick={() => updatePosition(gem.latitude, gem.longitude)}>
                            <ViewLocation>Click To View Location</ViewLocation>
                        </div>
                    </Card>
                )
            })}
        </Container>
    )
}

