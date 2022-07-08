import logo from './logo.svg';
import './App.css';
import ClassPropsComponent from './components/ClassPropsComponent';
import ClassStateComponent from './components/ClassStateComponent';
import FunctionalPropsComponent from './components/FunctionalPropsComponent';
import FunctionalStateComponent from './components/FunctionalStateComponent';

function App() {
  return (
    <div>
      <FunctionalStateComponent />
      <FunctionalPropsComponent 
        title="The Witcher" episodes = {20} isRecommended = {true} hashtags = {["100/10", "monsters", "ummmmmmm"]}
      />

      <ClassPropsComponent title="Stranger Things" episodes={30} isRecommended={true} hashtags={["scary", "superpower"]} />
      <ClassStateComponent />
    </div>
  );
}

export default App;
