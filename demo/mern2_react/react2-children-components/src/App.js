import logo from './logo.svg';
import './App.css';
import Container from './views/Container';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
