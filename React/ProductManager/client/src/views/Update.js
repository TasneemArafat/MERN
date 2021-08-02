import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'
import Form from '../components/Form'

const Update = (props) => {
    const [product, setProduct] = useState()
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + props.id)
        .then(res => {
            setProduct(res.data.product)
            setLoaded(true)
        })
    }, [])

    const updateObject = (product) => {
        axios.put('http://localhost:8000/api/products/' + props.id, product)
        .then(navigate("/products"));
    }

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && <Form actionProps={updateObject} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description}></Form>}
            <div><Link to={"/products"}>Back to Home Page</Link></div>
        </div>
    )
}

export default Update
