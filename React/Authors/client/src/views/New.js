import React, {useState} from 'react'
import axios from 'axios'
import Form from '../components/Form'
import Title from '../components/Title'
import {navigate} from '@reach/router'

const New = () => {
    const [authors, setAuthors] = useState([])
    const [errors, setErrors] = useState([]); 

    const createAuthor = (name) => {
        console.log("post")
        axios.post('http://localhost:8000/api/authors', {name})
        .then(res => {
            setAuthors([...authors, res.data])
            navigate("/")})
        .catch(err=>{
            console.log(err.response);
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }
    return (
        <div>
            <Title title="Favourite Author" link="/" redirect="Home" content="Add a new author:"></Title>
            <Form initialName="" formAction={createAuthor} errors={errors}></Form>
        </div>
    )
}

export default New
