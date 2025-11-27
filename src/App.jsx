import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Catalog from './pages/catalog.jsx';
import Header from './components/Header/header.jsx';
import Slider from './components/slider/slider.jsx';
import HitCatalog from './components/hitcatalog/hitCatalog.jsx';

function App() {

  return (
    <div className="App">
      <Header/>
      <Slider/>
      <HitCatalog/>
    </div>
  );
}

export default App;
