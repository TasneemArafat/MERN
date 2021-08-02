import React, {useState, useEffect} from 'react'
import Form from './Form'
import Display from './Display'
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

    return (
        <div>
            <Form/>
            <hr/>
            {loaded && <Display productsList={products}/>}
        </div>
    )
}

export default Main
