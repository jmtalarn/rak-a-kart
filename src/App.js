import React, { Component } from 'react';
import './utils/FontAwesome.init';
import './App.css';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import products from './data/products.json';

class App extends Component {
  render() {
    const product = products[ 0 ];
    return (
      <div className="App">
        <Header />
        <ProductPage product={product} />
      </div>
    );
  }
}

export default App;
