import * as React from 'react';
import Product from './component/Product';
import Feedstock from './component/Feedstock';
import CardList from './component/CardList';
import './App.css';
import ProductList from './component/ProductList';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='container_form'>
        <Product />
        <Feedstock />
      </div>
      <CardList />
      <ProductList />
    </div>
  );
}

export default App;
