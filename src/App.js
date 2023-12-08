import Header from './components/navbar.jsx';
import "./App.css"
import About from './components/about.jsx';
import Sponsored from './components/sponsored.jsx';
import Aboutus from "./components/aboutus.jsx"

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Sponsored/>
      <Aboutus/>
    </div>
  );
}

export default App;
