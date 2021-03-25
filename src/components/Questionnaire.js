import { Component } from 'react';
import Questions from './Questions';
import Pagination from './Pagination';
const { getItems } = require('@alheimsins/b5-johnson-120-ipip-neo-pi-r');

export default class Questionnaire extends Component {
  state = {
    items: [],
    answers: [],
    currentPage: 1,
    questionsPerPage: 5
  };

  
  componentDidMount() {
    this.setState({ items: getItems() });
  }
  
  pushAnswer = answer => {
    let stack = this.state.answers.concat(answer);
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
  
  setCurrentPage = pageNumber => {
    this.setState({ currentPage: pageNumber });
  }

  getCurrentPage = ()=> {
    return this.state.currentPage;
  }
  
  render() {
    const { pushAnswer, storeAnswer, getAnswers, setCurrentPage, getCurrentPage } = this;
    const indexOfLastQuestion = this.state.currentPage * this.state.questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - this.state.questionsPerPage;
    const currentQuestions = this.state.items.slice(indexOfFirstQuestion, indexOfLastQuestion);
    console.log(`currentQuestions: ${JSON.stringify(currentQuestions)}`);
    return (
      <div className="container mt-5">
        <Questions
          currentQuestions={currentQuestions}
          pushAnswer={pushAnswer}
          storeAnswer={storeAnswer}
          getAnswers={getAnswers}
        />
        <Pagination
          questionsPerPage={this.state.questionsPerPage}
          totalQuestions={this.state.items.length}
          setCurrentPage={setCurrentPage}
          getCurrentPage={getCurrentPage}
        />
      </div>
    );
  }
}


