import './App.css';
import Search from './components/Search';
import ShowData from './components/ShowData';
import React, {useState} from 'react';

function App() {
  const [id, setId] = useState() 
  const [type, setType] = useState("")

  const handleData = (ID,TYPE) => {
    setId(ID);
    setType(TYPE);
  }

  return (
    <div className="App">
      <Search handleData={handleData}></Search>
      <ShowData id={id} type={type}></ShowData>
    </div>
  );
}

export default App;
