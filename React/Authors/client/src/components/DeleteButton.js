import React from 'react'
import axios from 'axios'
const DeleteButton = (props) => {

    const clickHandler = () => {
        axios.delete('http://localhost:8000/api/authors/'+props.id)
        .then(res => props.succesfullDelete(props.id))
    }

    return (
        <div>
            <button onClick={clickHandler}>Delete</button>
        </div>
    )
}

export default DeleteButton
