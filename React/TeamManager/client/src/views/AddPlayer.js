import React, {useState} from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import Form from '../components/Form'
import {navigate} from '@reach/router'

const AddPlayer = () => {
    
    const [errors, setErrors] = useState([]);
    // const [loaded, setLoaded] = useState(false);

    const createPlayer = (Player) =>{
        axios.post('http://localhost:8000/api/player',Player)
        .then(res => navigate("/players/list"))
        .catch(err=>{
            console.log(err.response.data.errors);
            const errorResponse = err.response.data.errors;
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })  
    }

    return (
        <div>
            <Nav link1="/players/list" link2="/status/game/1" desc1="Manage Players" desc2="Manage Player Status"></Nav>
            <Nav link1="/players/list" link2="/players/addplayer" desc1="List" desc2="Add Player"></Nav>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <Form formAction={createPlayer} errors={errors}></Form>
        </div>
    )
}

export default AddPlayer
