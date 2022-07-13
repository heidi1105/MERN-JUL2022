import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import ErrorPage from './views/ErrorPage';
import Country from './views/Country';
import Keyword from './views/Keyword';
import DisplayOnLoad from './views/DisplayOnLoad';

const Home = () =>{
  return(
    <fieldset>
      <legend> Home.jsx</legend>
    </fieldset>
  )
}

const About = () =>{
  return(
    <fieldset>
      <legend> About.jsx</legend>
    </fieldset>
  )
}



function App() {
  return (
    <fieldset>
      <legend> App.js</legend>
      <h1> Routing demo</h1>
      <p>
        Link: 
        <Link to="/home"> Home</Link> |
        <Link to="/about"> About</Link> | 
        <Link to="/japan"> Japan </Link> | 
        <Link to="/whatever/blue"> Whatever </Link> | 
        <Link to="/pokemon/snorlax"> Search for snorlax </Link> |
        <Link to="/pokemon/mew"> Search for mew </Link>

      </p>


      <p>
        A-tags: 
        <a href="/home"> Home </a> |
        <a href="/about"> about </a> |
        <a href="http://www.google.com"> Google</a>
      </p>


      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/:country" element={<Country />} />
        <Route path="/:keyword/:color" element={<Keyword />} />
        <Route path="/pokemon/:pokemonName" element={<DisplayOnLoad />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>


    </fieldset>
  );
}

export default App;
