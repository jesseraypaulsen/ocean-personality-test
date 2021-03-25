import React, { Component } from 'react';
import RadioSet from './RadioSet';

export default class Question extends Component {
  state = {
    score: null
  };

  handler = e => {
    this.setState({ score: e.target.value }, this.afterHandler);
  }

  afterHandler = () => {
    let { id, domain, facet } = this.props.item;
    let { score } = this.state;
    let j = { id, domain, facet, score };
    let k = JSON.stringify({ domain, facet, score });
    this.props.pushAnswer(j);
    localStorage.setItem(id, k); // TODO: check if id already exists; if yes, check if score has changed; if yes, then replace item.
  } //https://stackoverflow.com/a/3146971

  render() {
    let { text, choices, id } = this.props.item;
    return (
      <React.Fragment>
        <div className="question bg-secondary bg-gradient">{text}</div>
        <RadioSet choices={choices} id={id} handler={this.handler} />
      </React.Fragment>
    )
  }
}