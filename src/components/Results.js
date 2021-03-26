import { useState } from 'react';

const calculateScore = require('@alheimsins/bigfive-calculate-score');
const getResult = require('@alheimsins/b5-result-text');

/*https://github.com/Alheimsins/bigfive-calculate-score/blob/main/README.md
  Pass an object with property 'answers'. 
  Answers have to be an Array with domain and score. 
  Facet is optional.
*/

export default function Results() {

  const data = {
    "timeElapsed": -51,
    "ip": "127.0.0.1",
    "lang": "en",
    "test": "120-IPIP-NEO-PI-R",
    "totalQuestions": 120,
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
  console.log('these are the scores:', scores);
  const results = getResult({scores, lang: 'en'});

  console.log('these are your results:' + JSON.stringify(results, null, 2));

  return (
    <div>
      Your Results So Far
    </div>
  );

};