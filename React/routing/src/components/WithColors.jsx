import React from 'react'

const WithColors = (props) => {
    return (
        <div>
            <h2 style={{color:props.colorW, background:props.colorB}}>The word is: {props.word}</h2>
        </div>
    )
}

export default WithColors
