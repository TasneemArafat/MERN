import React, { useState } from 'react';
const ColorDisplay = (props) => {
    const [colors, setColors] = useState([]);
    return (
        <>
            <div className="zeft">
            {props.colors.map( (item, i) => <div key={ i } 
            style ={{width:"100px",height:"100px",backgroundColor:item}}></div>)}
            </div>
        </>
    );
};
    
export default ColorDisplay;