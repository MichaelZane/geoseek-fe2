import React, {useState, useEffect} from 'react'
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
    margin: 20px;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    width:250px;
    justify-content: space-between;
    
    
    `

    const Card2 = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 350px;
    padding: 0px;
    max-height: 100%;
    min-height: 100vh;
    height: 100vh;
    overflow-y: auto;
    `


    return (
        <Card2>
            {gems.map((gem) => {

                return (
                    <div>
                        <Card>
                            <div onClick={() => updatePosition(gem.latitude, gem.longitude)}>
                                <GemCard key={gem.id} title={gem.title} latitude={gem.latitude} longitude={gem.longitude} />
                            </div>
                        </Card>
                    </div>
                )
            })}
        </Card2>
    )
}

