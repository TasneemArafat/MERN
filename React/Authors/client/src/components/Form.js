import React,{useState} from 'react'
import {navigate} from '@reach/router'

const Form = (props) => {
    const [author, setAuthor] = useState(props.initialName)

    const submitHandler = (e) =>{
        e.preventDefault()
        props.formAction(author)
    }

    return (
        <div>
            <p>Name:</p>
            <form onSubmit={submitHandler}>
            {props.errors.map((err, index) => <p key={index}>{err}</p>)}
            <input name="name" type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
            <button onClick={() => navigate("/")}>Cancel</button>
            <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Form
