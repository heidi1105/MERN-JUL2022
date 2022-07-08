import logo from './logo.svg';
import './App.css';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import CombineForm from './components/CombineForm';

function App() {
  return (
    <div className="App">
      <CombineForm />
      <Form3 />
      <Form2 />
      <Form1 />
    </div>
  );
}

export default App;
