import React , {useState, useEffect} from 'react'
import axios from 'axios'
import DeleteButton from './DeleteButton'


const PlayersList = () => {
    const [players, setPlayers] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
        .then(res=>{
            setPlayers(res.data);
            setLoaded(true);
        })
    })

    const removeFromDB = (playerID) => {
        setPlayers(players.filter(player => player._id !== playerID))
    }

    return (
        <div>
            {loaded && <table>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((item,idx) => { return <tr key={idx}>
                            <td>{item.playerName}</td>
                            <td>{item.preferredPosition}</td>
                            <td><DeleteButton id={item._id} successfullDelete={removeFromDB}/></td>
                        </tr>
                    })}
                </tbody>
            </table>}
        </div>
    )
}

export default PlayersList
