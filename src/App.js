import logo from './logo.svg';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Favourite from './components/Favourite';
import {BrowserRouter as Router,Route, BrowserRouter, Routes} from 'react-router-dom';
import './App.css';


function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        
      <Route path="/" element={[<Banner/>,<Movies/>]} />


      <Route path ='/favourites'  Component={Favourite}    />
      </Routes>
      
    
    {/*<Banner/>
    <Movies/>
  <Favourite/>*/}
   
    </Router>
  
  );
}

export default App;
