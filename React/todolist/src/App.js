import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import DisplayTasks from './components/DisplayTasks';
import React , {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([]);

  const allTasks = (task) => {
    setTasks([...tasks, {name:task, status:false}])
  }
  return (
    <div className="App">
     {/* <Input tasks={tasks} setTasks={setTasks}/> */}
     <Input addatask={allTasks}/>
     <DisplayTasks tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
