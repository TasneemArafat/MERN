import React, {useState, useEffect} from 'react'
import Form from '../components/Form'
import Title from '../components/Title'
import axios from 'axios'
import {navigate} from '@reach/router'


const Edit = (props) => {
    const [author, setAuthor] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/'+props.id)
            .then(res => {
                setAuthor(res.data.Author.name)
                setLoaded(true)
            });
    }, [])

    const updateAuthor = (name) => {
        axios.put('http://localhost:8000/api/authors/'+props.id, {name})
        .then(res => {
            setAuthor(res.data.Author.name)
            navigate("/")
        })
        .catch(err=>{
            console.log(err.response.data.errors);
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }

    return (
        <div>
            <Title title="Favourite Author" link="/" redirect="Home" content="Edit this author:"></Title>
            {loaded && <Form initialName={author} formAction={updateAuthor} errors={errors}></Form>}
        </div>
    )
}

export default Edit
