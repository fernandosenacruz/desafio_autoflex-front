import * as React from 'react';
import Product from './component/Product';
import Feedstock from './component/Feedstock';
import CardList from './component/CardList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Product />
      <Feedstock />
      <CardList />
    </div>
  );
}

export default App;
