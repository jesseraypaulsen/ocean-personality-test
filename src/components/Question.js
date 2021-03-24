import { Component } from 'react';
import RadioSet from './RadioSet';

export default class Question extends Component {

  state = {
    id: this.props.item.id,
    domain: this.props.item.domain,
    facet: this.props.item.facet,
    text: this.props.item.text,
    choices: this.props.item.choices,
    score: null
  };

  handler = e => {
    this.setState({ score: e.target.value }, this.afterHandler);
  }

  afterHandler = () => {
    let { id, domain, facet, score } = this.state;
    let j = { id, domain, facet, score };
    let k = JSON.stringify({ domain, facet, score });
    this.props.pushAnswer(j);
    localStorage.setItem(id, k);
  } //https://stackoverflow.com/a/3146971

  render() {
    let { index } = this.props;
    let { text, id, choices } = this.state;
    return (<div key={index}>
      <div className="question bg-secondary bg-gradient">{index+1}. {text}</div>
      <RadioSet choices={choices} id={id} handler={this.handler} />
    </div>)
  }
}