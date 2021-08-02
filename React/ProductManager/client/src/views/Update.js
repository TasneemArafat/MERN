import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'

const Update = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + props.id)
        .then(res => {
            console.log(res.data.product.title);
            setTitle(res.data.product.title);
            setPrice(res.data.product.price);
            setDescription(res.data.product.description);
        })
    }, [])

    const updateObject = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + props.id, {
            title,price,description
        })
        .then(res => console.log(res));
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateObject}>
                <label for="title">Title</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <br></br>
                <label for="price">Price</label>
                <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <br></br>
                <label for="description">Descrition</label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <br></br>
                <input type="submit" value="Update"/>
            </form>
            <div><Link to={"/products"}>Back to Home Page</Link></div>
        </div>
    )
}

export default Update
