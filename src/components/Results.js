import { useState } from 'react';

const calculateScore = require('@alheimsins/bigfive-calculate-score');
const getResult = require('@alheimsins/b5-result-text');

/*https://github.com/Alheimsins/bigfive-calculate-score/blob/main/README.md
  Pass an object with property 'answers'. 
  Answers have to be an Array with domain and score. Facet is optional.
*/

export default function Results(props) {
  const { answers } = props;
  console.log(`this is the answers array: ${JSON.stringify(answers)}`);
  const data = { answers: answers }; // the module requires that we use an object named `data`

  //based on https://github.com/rubynor/bigfive-web/blob/master/api/result.js
  const scores = calculateScore(data);
  const results = getResult({scores, lang: 'en'});

  return (
    <>
      <nav>
        <div 
          class="nav nav-tabs" 
          id="nav-tab" 
          role="tablist"
        >
          {results.map((res, i) => 
            <button 
              key={i} 
              className={i==0 ? "nav-link active" : "nav-link"} 
              id={"nav-"+res.domain+"-tab"} 
              data-bs-toggle="tab" 
              data-bs-target={"#nav-"+ res.domain} 
              type="button" 
              role="tab" 
              aria-controls={"nav-"+res.domain}
            >
              {res.title}
            </button>
          )}
        </div>
      </nav>

      <div 
        class="tab-content" 
        id="nav-tabContent"
      >
        {results.map((res, i) => 
          <div 
            key={i} 
            className={i==0 ? "tab-pane fade show active" : "tab-pane fade"} 
            id={"nav-"+res.domain} 
            role="tabpanel" 
            aria-labelledby={"nav-"+res.domain+"-tab"}
          >
            <p>
              domain: {res.domain}
            </p>
            <p>
              title: {res.title}
            </p>
            <p>
              shortDescription: {res.shortDescription}
            </p>
            <p>
              score: {res.score}
            </p>
            <p>
              scoreText: {res.scoreText}
            </p>
            <p>
              count: {res.count}
            </p>
            <p>
              text: {res.text}
            </p>
            <p>
              description: {res.description}
            </p>
            <p>
              <h3>Facets</h3>
              {res.facets.map(i => (
                <div>
                  <div>facet: {i.facet}</div>
                  <div>title: {i.title}</div>
                  <div>text: {i.text}</div>
                  <div>score: {i.score}</div>
                  <div>count: {i.count}</div>
                  <div>scoreText: {i.scoreText}</div>
                </div>
              ))}
            </p>
          </div>
        )}

      </div>
    </>
  );

  //https://getbootstrap.com/docs/5.0/components/navs-tabs/#using-data-attributes

};