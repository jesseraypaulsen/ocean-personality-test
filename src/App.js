import './App.css';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      {/* TODO: add router */}
      <Results />
      <Questionnaire />
    </div>
  );
}

export default App;
