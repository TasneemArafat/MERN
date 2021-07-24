import React, { useState } from 'react'
const ColorForm = (props) => {
    const [color, setColor] = useState("");

    const AddColor = (e) => {
        e.preventDefault();
        props.newColor(color);
    };

    return (
        <div>
            <form onSubmit={ AddColor }>
                <label>Color</label>
                <input 
                    placeholder="Add a color"
                    onChange={ (e) => setColor(e.target.value)}
                    value={color}
                />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default ColorForm;