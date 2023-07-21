import React from 'react';
import './App.css';
import './main.css';
import './components/ImageFilter.css'
import Home from './components/Home';
import ProductList from './ProductList';
import ImageFilter from './components/ImageFilter'






function App() {
  return (

<div className='App'>
  <Home/>
  <ProductList/>
  <ImageFilter />
</div>
  );
}

export default App;
