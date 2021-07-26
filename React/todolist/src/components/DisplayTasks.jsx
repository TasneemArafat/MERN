import React from 'react'

const DisplayTasks = (props) => {
    const { tasks, setTasks } = props;

    const clickHandler = (e,i) => {
        let newTasks = [...tasks];
        newTasks[i].status = !(newTasks[i].status);
        setTasks(newTasks);
    }

    const deleteItem = (e,i) => {
        let newTasks = tasks.filter(item => item.name != tasks[i].name)
        setTasks(newTasks);
    }
    return (
        <div>
            {tasks.map((item,i) => {
                return (
                <div>
                    <p style={item.status ? {textDecoration:"line-through"}:{textDecoration:"none"}} >{item.name}</p>
                    <input type="checkbox" onClick={(e) => clickHandler(e,i)} checked={item.status}/>
                    <button onClick={(e)=> deleteItem(e,i)}>Delete</button>
                    </div>
                    )
                    }
                    )
                    }
        </div>
    )
}

export default DisplayTasks
