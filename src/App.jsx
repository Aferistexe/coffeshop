import './App.css';
import Header from './components/Header/header.jsx';
import Slider from './components/slider/slider.jsx';
import HitCatalog from './components/hitcatalog/hitCatalog.jsx';
import { BasketProvider } from '../src/components/basket/BasketContext.js';

function App() {

  return (
    <div className="App">
      <BasketProvider>
        <Header/>
        <Slider/>
        <HitCatalog/>
      </BasketProvider>
    </div>
  );
}

export default App;
