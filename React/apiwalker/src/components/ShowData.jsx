import React, {useState, useEffect} from 'react'
import axios from 'axios';

const ShowData = ({id, type}) => {
    const [data, setData] = useState({})
    
    useEffect(()=>{
        axios.get('https://swapi.dev/api/'+type+'/'+id+'/').then(response=>{
            setData(response.data)
            console.log(response.data)
        })
    }, [id, type]); 

    return (
        <div>
            <h1>{data.name}</h1>
            {type === "people" && <div> <p>{data.mass}</p> 
            <p>{data.height}</p>
             <p>{data.hair_color}</p>
              <p>{data.skin_color}</p> 
              </div>}
            
            {type === "planets" && <div> <p>{data.climate}</p> 
            <p>{data.terrain}</p>
             <p>{data.surface_water}</p>
              <p>{data.population}</p> 
              </div>}
        </div>
    )
}


export default ShowData
