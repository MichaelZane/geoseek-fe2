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
  width: 200px;
  justify-content: space-between;
`;

const Card2 = styled.div`
  border: 2px solid teal;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 350px;
  padding: 0px;
  max-height: 100%;
  min-height: 100vh;
  height: 100vh;
  overflow-y: auto;
`;

export default function ViewGem({ updatePosition }) {
  const [gems, setGems] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:5000/api/gems")
      .then(res => {
        setGems(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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

  if (!search) {
    return (
        <Card2>
            <form>
                <input
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
                                <GemCard key={gem.id} title={gem.title} latitude={gem.latitude} longitude={gem.longitude} />
                                <div onClick={() => updatePosition(gem.latitude, gem.longitude)}>
                                    <Link className = 'viewLink'>Click To View Location</Link>
                                    {localStorage.getItem("token") && (
                                        <Link className= 'viewLink' onClick={()=>markComplete(gem.id)}>Mark As Complete</Link>
                                    )}
                                </div>
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
        <Card2>
            <form>
                <input
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
            {filtered.map((gem) => {
                return (
                    <div>
                        <Card>
                            <div>
                                <GemCard key={gem.id} title={gem.title} latitude={gem.latitude} longitude={gem.longitude} />
                                <div onClick={() => updatePosition(gem.latitude, gem.longitude)}>
                                    <Link className = 'viewLink'>Click To View Location</Link>
                                    {localStorage.getItem("token") && (
                                        <Link className= 'viewLink' onClick={()=>markComplete(gem.id)}>Mark As Complete</Link>
                                    )}
                                </div>
                            </div>
                        </Card>
                    </div>
                )
            })}
        </Card2>
    )
}
