import './App.css';
const getResult = require('@alheimsins/b5-result-text');
const calculateScore = require('@alheimsins/bigfive-calculate-score');

function App() {

  const data = {
    "timeElapsed": -51,
    "ip": "127.0.0.1",
    "lang": "en",
    "test": "50-IPIP-NEO-PI-R",
    "totalQuestions": 50,
    "answers": [
      {
        "domain": "A",
        "facet": "1",
        "score": "3"
      },
      {
        "domain": "A",
        "facet": "1",
        "score": "3"
      },
      {
        "domain": "E",
        "facet": "1",
        "score": "3"
      },
      {
        "domain": "E",
        "facet": "2",
        "score": "3"
      }
    ]
  }

  //based on https://github.com/rubynor/bigfive-web/blob/master/api/result.js
const scores = calculateScore(data);
const results = getResult({scores, lang: 'en'})

console.log(JSON.stringify(results, null, 2))

  return (
    <div className="App">
      <header className="App-header">
        {JSON.stringify(results, null, 2)}
      </header>
    </div>
  );
}

export default App;
