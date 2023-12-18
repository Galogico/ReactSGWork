import Header from './components/navbar.jsx';
import "./App.css"
import About from './components/about.jsx';
import Sponsored from './components/sponsored.jsx';
import Aboutus from "./components/aboutus.jsx"
import Collection from './components/Collection.jsx';
import Cards from './components/Cards.jsx';
import Cimg1 from "./images/cards/nft1.png"
import Cimg2 from "./images/cards/nft2.png"
import Cimg3 from "./images/cards/nft3.png"
import Cimg4 from "./images/cards/nft4.png"
import Cimg5 from "./images/cards/nft5.png"
import Cimg6 from "./images/cards/nft6.png"
import Cimg7 from "./images/cards/nft7.png"
import Cimg8 from "./images/cards/nft8.png"
import Cimg9 from "./images/cards/nft9.png"
import Faq from './components/Faq.jsx';

function App() {
  const array = [Cimg1, Cimg2, Cimg3, Cimg4, Cimg5, Cimg6, Cimg7, Cimg8, Cimg9]
  const feat = [Cimg1, Cimg2, Cimg3]
  return (
    <div className="App">
      <Header/>
      <About/>
      <Sponsored/>
      <Aboutus/>
      <Collection/>
      <div className='cardsContainer'>
        {
          array.map((img) =>{
            return(
              <Cards image={img}/>
              )
            })
          }
        </div>
        <p className='feat'>Featured Artworks</p>
        <p className='featDesc'>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.</p>
        <div className='cardsContainer'>
        {
          feat.map((img) =>{
            return(
              <Cards image={img}/>
              )
            })
          }
        </div>
        <Faq/>
        <div className='recont'>
          <div className='rectangle'>
            <p className='feat'>Get Ready to Collect<br/>our NFT</p>
            <button className='getButton'>Get Started</button>
          </div>
        </div>
    </div>
  );
}

export default App;
