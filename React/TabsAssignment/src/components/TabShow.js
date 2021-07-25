import React from 'react'
import Button from '@material-ui/core/Button';

const TabShow = (props) => {
    const tabs = ['Tab1','Tab2','Tab3'];

    const clickHandler = (e, value, i) => {
        e.preventDefault();
        props.data(value + " content is showing here")
    }

    return (
        <div>
            {
                tabs.map((value,i) => {return <Button variant="contained" key={i} 
                onClick={(e) =>clickHandler(e,value,i)}>{value}</Button>})
            }
        </div>
    )
}

export default TabShow
