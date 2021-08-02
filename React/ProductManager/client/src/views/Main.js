import React, {useState, useEffect} from 'react'
import Form from '../components/Form'
import Display from '../components/Display'
import axios from 'axios'

const Main = () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                console.log(res.data.products);
                setProducts(res.data.products);
                setLoaded(true);
            });
    },[])

    const removeFromDB = productID => {
        setProducts(products.filter(product => product._id != productID))

    }

    return (
        <div>
            <Form/>
            <hr/>
            {loaded && <Display productsList={products} removeFromDB = {removeFromDB}/>}
        </div>
    )
}

export default Main
