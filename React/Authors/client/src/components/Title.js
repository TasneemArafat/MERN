import React from 'react'
import {Link} from '@reach/router'
 
const Title = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p><Link to={props.link}>{props.redirect}</Link></p>
            <p>{props.content}</p>
        </div>
    )
}

export default Title
