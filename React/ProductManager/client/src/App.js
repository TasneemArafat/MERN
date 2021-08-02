import './App.css';
import Main from './components/Main';
import ProductDetail from './components/ProductDetail';
import {Router} from '@reach/router';
function App() {
  return (
    <div className="App">
      <Router>
      <Main path="products/"></Main>
      <ProductDetail path="products/:id"></ProductDetail>
      </Router>
    </div>
  );
}

export default App;
