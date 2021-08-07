import './App.css';
import {Router} from '@reach/router'
import List from './views/List'
import AddPlayer from './views/AddPlayer'

function App() {
  return (
    <div className="App">
      <Router>
      <List path="players/list"/>
      <AddPlayer path="players/addplayer"/>
      </Router>
    </div>
  );
}

export default App;
