import logo from './logo.svg';
import './App.css';
import PropsComponent from './components/PropsComponent'
import { StateComponent } from './components/StateComponent';

function App() {
  return (
    <div className="App">
      <h1> TV Shows </h1>
        <StateComponent />

        <PropsComponent 
          title="Stranger Things" 
          episodes={30} 
          isRecommended={true} 
          hashtags={["scary", "superpower"]} 
        />
        <PropsComponent title="Umbrella Academy" episodes={30} isRecommended={false} hashtags={["First 2 seasons are great", "superpower"]} />

    </div>
  );
}

export default App;
// pass info from parents to child: PROPS