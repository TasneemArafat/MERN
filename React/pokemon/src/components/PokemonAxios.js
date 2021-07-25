import React , {useState, useEffect} from 'react'
import axios from 'axios';

const PokemonAxios = () => {
    const [pokemon, setPokemon] = useState([]);

    const clickHandler = ((e) => {
        e.preventDefault();
        axios.get(' https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response=>{(setPokemon(response.data.results))})
    });


    return (
        <div>
            <button onClick={clickHandler}>Fetch Pokemon</button>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    )
}

export default PokemonAxios