import React, {useState} from 'react'
import Button from '@material-ui/core/Button';

const MyComponent = () => {
    const tabs = ['Tab1','Tab2','Tab3'];
    const [msg, setMsg] = useState("");

    const clickHandler = (e, value, i) => {
        e.preventDefault();
        setMsg(value + " content is showing here")
    }
    return (
        <div>
            {/* without lifting */}
            {
                tabs.map((value,i) => {return <Button variant="contained" key={i} 
                onClick={(e) =>clickHandler(e,value,i)}>{value}</Button>})
            }
            <p>{msg}</p>
        </div>
    )
}

export default MyComponent
