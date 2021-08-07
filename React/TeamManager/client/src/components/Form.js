import React,{useState} from 'react'

const Form = (props) => {
    const [playerName, setPlayerName] = useState("")
    const [preferredPosition, setpreferredPosition] = useState("")
    const Game1 = "Undecided"
    const Game2 = "Undecided"
    const Game3 = "Undecided"
    

    const submitHandler = (e) => {
        e.preventDefault()
        props.formAction({playerName, preferredPosition, Game1, Game2, Game3})
    }

    return (
        <div>
            <h3>Add Player</h3>
            <form onSubmit={submitHandler}>
            <label>Player Name: </label>
            <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)}></input>
            <label>Player Position: </label>
            <input type="text" value={preferredPosition} onChange={(e) => setpreferredPosition(e.target.value)}></input>
            <input type="submit"  value="Add"></input>
            </form>
        </div>
    )
}

export default Form
