import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'
import Delete from '../components/Delete'

const ProductDetail = (props) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+ props.id)
        .then(res =>{
            setProduct(res.data.product);
            console.log(res.data);
            console.log(res.data.product);
        });
        },[])

                
    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price} $</p>
            <p>Description: {product.description}</p>
            <div><Link to={"/products/" + product._id + "/edit"}>Edit</Link></div>
            <Delete id={product._id} successfullDelete={() => navigate("/products")}></Delete>
        </div>
    )
}

export default ProductDetail
