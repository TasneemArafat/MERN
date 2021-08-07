import React, {useState,useEffect} from 'react'
import Title from '../components/Title'
import DeleteButton from '../components/DeleteButton'
import axios from 'axios'
import {navigate} from '@reach/router'

const Main = () => {
    const [authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res=>{
            setAuthors(res.data.Authors);
            setLoaded(true);
        })
    }, [])

    const removeFromDB = authorID => {
        setAuthors(authors.filter(author => author._id !== authorID))
        // navigate("/")

    }

    return (
        <div>
            <Title title="Favourite Author" link="/new" redirect="Add an author" content="We have quotes by:"></Title>
            {loaded && <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {authors.map((item,i) => { return <tr key={i}>
                    <td>{item.name}</td>
                    <td><button onClick={() => navigate("/edit/"+ item._id)}>Edit</button>
                    <DeleteButton id={item._id} succesfullDelete={removeFromDB} ></DeleteButton></td>
                    </tr>
                    })}
                </tbody>
            </table>}
        </div>
    )
}

export default Main

