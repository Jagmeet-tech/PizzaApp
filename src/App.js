import { useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';



function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
