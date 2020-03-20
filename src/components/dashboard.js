import React, {useState, useEffect} from 'react'
import axios from 'axios'

function UserDashboard(props){
    const [user, setUser]= useState([])
    const [completed, setCompleted]= useState([])
    const token= localStorage.getItem('userID')

    useEffect(() => {
        props.setRegLogRendered(true)
      }, [])

    useEffect(()=>{
        axios.get(`https://geoseek-be.herokuapp.com/api/users/${token}`)
            .then(res=>{
                setUser(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])

    function viewCompleted(){
        axios.get(`https://geoseek-be.herokuapp.com/api/completedByUser/${token}`)
            .then(res=>{
                console.log(res)
                setCompleted(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return(
        <div>
            <h1>placeholder for img</h1>
            <h1>{user.username}</h1>
            <button>Edit Profile</button>
            <button onClick={viewCompleted}>View Your Completed Gems</button>
            <div>
                {completed.map(gem=>{
                    return(
                        <div>
                            <h1>{gem.id}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserDashboard