import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GemCard from "./gem";
import styled from "styled-components";

const Card = styled.div`
    margin: 20px;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    width: 250px;
    justify-content: space-evenly;

  `;
  const ButtonContainer = styled.div`
  width: 200px;
 height:150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .button {
    margin: 5px 3px;
    width: 200px;
    height: 40px;
    border-radius: 5px;
    background-color:#FF69B4;
    border: none;
    color: white;
    text-align: center;
    font-size: 20px;
    transition: 0.3s;
    text-decoration: none;
    cursor: pointer;
    padding:5px; 
    // opacity: 0.6;
    // transition: opacity .55s ease-in-out;
    // -moz-transition: opacity .55s ease-in-out;
    // -webkit-transition: opacity .55s ease-in-out;

   :hover {
       opacity: 1.0;
       transition: opacity .55s ease-in-out;
       -moz-transition: opacity .55s ease-in-out;
       -webkit-transition: opacity .55s ease-in-out;
       background-color:#C66DB2;
       //border: 2px solid black;
   }
  }
   `

      const Card2 = styled.div`
    border: 3px solid black;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 400px;
    padding: 0px;
    max-height: 100%;
    min-height: 100vh;
    height: 100vh;
    overflow-y: auto;
    `

  const Container = styled.div`
    border-left: 3px solid black;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 400px;
    padding: 0px;
    max-height: 100%;
    height: 800px;
    overflow-y: auto;
  `;

  const Input = styled.input`
width: 200px;
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

export default function ViewGem({ updatePosition, setRegLogRendered }) {
  const [gems, setGems] = useState([]);
  const [search, setSearch]= useState('')
    const [filtered, setFiltered]= useState([])

  useEffect(() => {
    axios
      .get("https://geoseek-be-stage.herokuapp.com/api/gems")
      .then(res => {
        console.log(res);
        setGems(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setRegLogRendered(false)
}, [])

function markComplete(gemId){
  const userToken= localStorage.getItem('userID')
  let body={
      gem_id: gemId,
      completed_by: userToken
  }
  axios.post('https://geoseek-be.herokuapp.com/api/completed/', body)
      .then(res=>{
          console.log(res)
      })
      .catch(err=>{
          console.log(err)
      })
}

  
  if(!search){
    return (
        <Card2>
            <form>
                <Input
                    name= 'searchForm'
                    placeholder= 'Search Gems'
                    value= {search}
                    onChange= {e=>{
                        setSearch(e.target.value.toLowerCase())
                        console.log(search)
                        const filteredGems= gems.filter(gem=>{
                            const ls= gem.title.toLowerCase()
                            return ls.search(search) !== -1
                        })
                        setFiltered(filteredGems)
                    }}
                />
            </form>
            {gems.map((gem) => {
                return (
                    <div>
                        <Card>
                            <div>
                                <GemCard key={gem.id} title={gem.title} latitude={gem.latitude} longitude={gem.longitude} description={gem.description} />
                                <ButtonContainer onClick={() => updatePosition(gem.latitude, gem.longitude)}>
                                    <Link className = 'button'>Click To View Location</Link>
                                    <br/>
                                    {localStorage.getItem("token") && (
                                        <Link className= 'button' onClick={()=>markComplete(gem.id)}>Mark As Complete</Link>
                                    )}
                                </ButtonContainer>
                            </div>
                        </Card>
                    </div>
                )
            })}
        </Card2>
    )
}
else{
  return (
    <Container>
      {gems.map(gem => {
        return (
          <div>
            <Card>
              <div>
                <GemCard
                  data-testid="gemcard"
                  key={gem.id}
                  title={gem.title}
                  latitude={gem.latitude}
                  longitude={gem.longitude}
                />
                <ButtonContainer
                  onClick={() => updatePosition(gem.latitude, gem.longitude)}
                >
                  <Link className="button" >Click To View Location</Link>
                </ButtonContainer>
              </div>
            </Card>
          </div>
        );
      })}
    </Container>
  );
  }
};