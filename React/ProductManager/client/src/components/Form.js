import React, {useState} from 'react'
import axios from 'axios'

const Form = (props) => {
    const [title, setTitle] = useState(props.initialTitle);
    const [price, setPrice] = useState(props.initialPrice);
    const [description, setDescription] = useState(props.initialDescription);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.actionProps({title, price, description})
    }


    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <label for="title">Title</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <br></br>
                <label for="price">Price</label>
                <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <br></br>
                <label for="description">Descrition</label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <br></br>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Form
