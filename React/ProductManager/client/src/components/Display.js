import React, {useState, useEffect} from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import Delete from './Delete';

const Display = (props) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data.products);
            });
    },[products])

    const removeFromDB = productID => {
        setProducts(products.filter(product => product._id != productID))

    }

    return (
        <div>
            {products.map((item,i) => {
            return <div>
            <Link to ={item._id}>{item.title}</Link>
            <div><Link to ={"/products/" + item._id + "/edit"}>Edit</Link></div>
            <Delete id={item._id} successfullDelete={() => removeFromDB(item._id)}></Delete>
            </div>})}
        </div>
    )
}

export default Display
