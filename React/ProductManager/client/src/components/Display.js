import React from 'react'
import { Link } from '@reach/router';
import axios from 'axios'

const Display = (props) => {

    const clickHandler = productId => {
        axios.delete('http://localhost:8000/api/products/'+productId)
        .then(res => {
            props.removeFromDB(productId);
        })
    }

    return (
        <div>
            {props.productsList.map((item,i) => {
            return <div>
            <Link to ={item._id}>{item.title}</Link>
            <button onClick={e => {clickHandler(item._id)}}>Delete</button>
            </div>})}
        </div>
    )
}

export default Display
