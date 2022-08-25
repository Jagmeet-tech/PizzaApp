import { useEffect, useState } from 'react';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function Home() {
  let [searchText,setSearchText] = useState("");

  return (
        <div className="App">
          <Header searchText= {searchText} setSearchText = {setSearchText}/>
          <Cards  searchText= {searchText} setSearchText = {setSearchText}/>
          <Footer/>
        </div>
  );
}

export default Home;
