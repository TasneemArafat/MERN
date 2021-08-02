import './App.css';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import Update from './views/Update';
import {Router} from '@reach/router';
function App() {
  return (
    <div className="App">
      <Router>
      <Main path="products/"></Main>
      <ProductDetail path="products/:id"></ProductDetail>
      <Update path="products/:id/edit"></Update>
      </Router>
    </div>
  );
}

export default App;
