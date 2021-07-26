import Main from './components/Main';
import WithId from './components/WithId';
import WithString from './components/WithString';
import WithColors from './components/WithColors';
import {Router} from '@reach/router';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/home"/>
        {/* <WithString path="/:word"/> */}
        <WithId path="/:id"/>
        <WithColors path="/:word/:colorW/:colorB"/>
      </Router>
    </div>
  );
}

export default App;
