import React,{useState,useEffect} from 'react'
import Nav from '../components/Nav'
import PlayerList from '../components/PlayersList'
import axios from 'axios'
import DeleteButton from '../components/DeleteButton'
const List = () => {
    const [players, setPlayers] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
        .then(res=>{
            console.log(res.data)
            setPlayers(res.data);
            setLoaded(true);
        })
    },[])

    const removeFromDB = (playerID) => {
        setPlayers(players.filter(player => player._id !== playerID))
    }
    return (
        <div>
            <Nav link1="/players/list" link2="/status/game/1" desc1="Manage Players" desc2="Manage Player Status"></Nav>
            <Nav link1="/players/list" link2="/players/addplayer" desc1="List" desc2="Add Player"></Nav>
            <PlayerList></PlayerList>
        </div>
    )
}

export default List
