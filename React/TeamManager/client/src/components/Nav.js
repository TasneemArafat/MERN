import React from 'react'
import {Link} from '@reach/router'
const Nav = (props) => {
    return (
        <div>
            <ul>
                <Link to={props.link1}><li>{props.desc1} |</li></Link>
                <Link to={props.link2}><li>{props.desc2}</li></Link>
            </ul>
        </div>
    )
}

export default Nav
