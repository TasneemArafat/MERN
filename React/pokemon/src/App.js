import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import PokemonAxios from './components/PokemonAxios';

function App() {
  return (
    <div className="App">
      {/* without Axios */}
      {/* <Pokemon/> */}

      {/* with Axios */}
      <PokemonAxios/>
    </div>
  );
}

export default App;
