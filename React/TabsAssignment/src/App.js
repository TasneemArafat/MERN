import React, { useState } from 'react';
import ColorForm from './components/ColorForm'
import ColorDisplay from './components/ColorDisplay'
import './App.css';
import MyComponent from './components/MyComponent';
import TabDisplay from './components/TabDisplay';
import TabShow from './components/TabShow';

function App() {
  const [currentList, setCurrentList] = useState([]);
  const [data, setData] = useState("");
  
  const onSend = ( Color ) => {
      setCurrentList([...currentList,Color]);
  }

  const newContent = (content) => {
      setData(content);
  }

  return (
      <>
          {/* <ColorForm newColor={onSend}></ColorForm>
          <ColorDisplay colors = {currentList}></ColorDisplay> */}
          {/* <MyComponent></MyComponent> */}
          <TabShow data = {newContent}></TabShow>
          <TabDisplay content = {data}></TabDisplay>
      </>
  );
}

export default App;
