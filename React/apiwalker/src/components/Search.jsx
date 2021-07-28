import React , {useState} from 'react'


const Search = (props) => {
    const [id, setId] = useState()
    const [type, setType] = useState("people")
    
    const submitHandler = (e) => {
        e.preventDefault();
        props.handleData(id,type);
    };

    return (
        <form onSubmit={ submitHandler }>
            <label for="type">Search for:</label>
            <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <lable for="id">ID:</lable>
            <input type="number" id="id" onChange={(e) => setId(e.target.value)} />
            <input type="submit" value="Search"/>
        </form>
    );
};

export default Search
