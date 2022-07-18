import logo from './logo.svg';
import './App.css';
import Dashboard from './views/Dashboard';
import {Routes, Route, Link} from "react-router-dom"
import CreatePage from './views/CreatePage';
import Details from './views/Details';
import UpdatePage from './views/UpdatePage';
import TestPage from './views/TestPage';
import Main from './views/Main';
import Main2 from './views/Main2';

function App() {
  return (
    <div>
      <h1> Songs Demo</h1>
      <p>
      <Link to="/test"> Test</Link>|
        <Link to="/dashboard"> Dashboard</Link>|
        <Link to="/songs/new"> Create new song</Link>
      </p>

      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/" element={<Main />} />
        <Route path="/main2" element={<Main2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/songs/new" element={<CreatePage />} />
        <Route path="/songs/:id" element={<Details />} />
        <Route path="/songs/:id/edit" element={<UpdatePage />} />

      </Routes>
    </div>
  );
}

export default App;
