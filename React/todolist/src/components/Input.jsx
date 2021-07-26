import React , {useState} from 'react'

const Input = (props) => {
    const [task, setTask] = useState("");
    // const { tasks, setTasks } = props;
    const {addatask} = props;

    const addTask = (e) => {
        e.preventDefault();
        addatask(task)
        // this will console the prev array because it won't rerender untill it finishes the function aaaand the asynchronus means it will change after render
        // console.log(tasks)
    }
    return (
        <div>
            <form onSubmit={addTask}>
                <input type="text" onChange={(e) => setTask(e.target.value)} ></input>
                <input type="submit" value="Add a Task"></input>
            </form>
        </div>
    )
}

export default Input
