//https://github.com/zrrrzzt/b5-web#related
//https://ipip.ori.org/
//https://github.com/zrrrzzt/b5-web/blob/main/pages/result.js
//https://b5.allthethings.win/result

import { Component } from 'react';
import Questions from './components/Questions';
import Pagination from './components/Pagination';
import Results from './components/Results';
import Header from './components/Header';
import './App.css';
const { getItems } = require('@alheimsins/b5-johnson-120-ipip-neo-pi-r');

export default class App extends Component {
  state = {
    items: [],
    answers: [],
    currentPage: 1,
    questionsPerPage: 3,
    toggler: false
  };

  componentDidMount() {
    let items = getItems();
    items = items.map(it=> {
      it.score = null;
      return it;
    });
    this.setState({ items });
  }

  // remove answer with duplicate id, so that the test-taker 
  // can change an answer without creating a duplicate instance.
  // we need this for pushAnswer but not for storeAnswer, because
  // localStorage already does this internally.
  uniqByKeepLast = (data, key) => {
    return [
      ...new Map(
        data.map(x => [key(x), x])
      ).values()
    ]
  }
  
  pushAnswer = answer => {
    let stack = this.state.answers.concat(answer);
    stack = this.uniqByKeepLast(stack, a => a.id);
    this.setState({ answers: stack });
  } //https://stackoverflow.com/a/37435577

  storeAnswer = ({ id, domain, facet, score }) => {
    let k = JSON.stringify({ domain, facet, score });
    localStorage.setItem(id, k);
    //https://stackoverflow.com/a/3146971
  }
  
  getAnswers = () => {
    return this.state.answers;
  }

  setScore = (id, eventVal, thenDoThis) => {
    let items = this.state.items.map(item => {
      if (item.id === id) {
        item.score = eventVal;
      }
      return item;
    });
    this.setState({ items }, thenDoThis);
  }
  
  setCurrentPage = pageNumber => {
    this.setState({ currentPage: pageNumber });
  }

  getCurrentPage = ()=> {
    return this.state.currentPage;
  }
  
  toggleResults = ()=> {
    this.setState({ toggler: !this.state.toggler });
  }

  render() {
    const { pushAnswer, storeAnswer, getAnswers, setCurrentPage, getCurrentPage, toggleResults, setScore } = this;
    const { currentPage, questionsPerPage, items, answers, toggler } = this.state;
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = items.slice(indexOfFirstQuestion, indexOfLastQuestion);

    return (
      <div className="App container">
        <Header toggleResults={toggleResults} toggler={toggler} />
        {toggler ? <Results answers={answers} /> : 
          <>
            <Questions
              currentQuestions={currentQuestions}
              pushAnswer={pushAnswer}
              storeAnswer={storeAnswer}
              getAnswers={getAnswers}
              setScore={setScore}
            />
            <Pagination
              questionsPerPage={questionsPerPage}
              totalQuestions={items.length}
              setCurrentPage={setCurrentPage}
              getCurrentPage={getCurrentPage}
            />
          </>
        }
      </div>
    );
  }
}


