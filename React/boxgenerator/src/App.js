import React, { useState } from 'react';
import ColorForm from './components/ColorForm'
import ColorDisplay from './components/ColorDisplay'
import './App.css';

function App() {
  const [currentList, setCurrentList] = useState([]);
  
  const onSend = ( Color ) => {
      setCurrentList([...currentList,Color]);
  }
  return (
      <>
          <ColorForm newColor={onSend}></ColorForm>
          <ColorDisplay colors = {currentList}></ColorDisplay>
      </>
  );
}

export default App;
