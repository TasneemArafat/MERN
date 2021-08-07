import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    
    const[player, setPlayer] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/player/'+props.id)
        .then(res => 
            setPlayer(res.data.playerName))
    },[])

    const deleteHandler = () => {
        axios.delete('http://localhost:8000/api/player/'+props.id)
        .then(res => {
            alert("Are you sure you want to delete " + player)
            props.successfullDelete(props.id)})
    }
    return (
        <div>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default DeleteButton
