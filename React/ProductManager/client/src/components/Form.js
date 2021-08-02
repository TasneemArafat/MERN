import React, {useState} from 'react'
import axios from 'axios'

const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
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
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
}

export default Form
