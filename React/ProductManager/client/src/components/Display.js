import React from 'react'
import { Link } from '@reach/router';

const Display = (props) => {
    return (
        <div>
            {props.productsList.map((item,i) => {return <div><Link to ={item._id}>{item.title}</Link></div>})}
        </div>
    )
}

export default Display
