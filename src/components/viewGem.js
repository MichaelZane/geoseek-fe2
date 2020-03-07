import React, {useState, useEffect} from 'react'
import {Link, Route} from "react-router-dom"
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
    margin: 20px;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    width: 200px;
    justify-content: space-between;
    `

    const Card2 = styled.div`
    border: 2px solid teal;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 40%;
    padding: 0px;
    max-height: 100%;
    min-height: 100vh;
    height: 100vh;
    `

    return (
        <Card2>
            {gems.map((gem) => {

                return (
                    <div>
                        <Card>
                            <div>
                                <GemCard key={gem.id} title={gem.title} latitude={gem.latitude} longitude={gem.longitude} />
                                <div onClick={() => updatePosition(gem.latitude, gem.longitude)}>
                                    <Link>Click To View Location</Link>
                                </div>
                            </div>
                        </Card>
                    </div>
                )
            })}
        </Card2>
    )
}

