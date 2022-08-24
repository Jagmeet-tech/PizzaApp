import { useEffect } from 'react';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function Home() {

  return (
        <div className="App">
          <Header/>
          <Cards/>
          <Footer/>
        </div>
  );
}

export default Home;
