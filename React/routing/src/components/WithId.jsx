import React from 'react'

const WithId = (props) => {
    let asd = true;
    if(isNaN(+props.id)) {
        asd = false;
    }
    return (
        <div>
            {asd ?<h2>The number is: {props.id}</h2> : <h2>The word is: {props.id}</h2>}
        </div>
    );
};

export default WithId
