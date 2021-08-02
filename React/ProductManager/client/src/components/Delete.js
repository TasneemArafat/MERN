import axios from 'axios'
import React from 'react'

const Delete = (props) => {

    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/api/products/'+ props.id)
        .then(res => {props.successfullDelete()}
    )}

    return (
        <div>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    )
}

export default Delete
