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
    // TODO: check if id already exists in the answers array; 
    // if yes, check if score has changed; if yes, then replace item.
    this.props.pushAnswer(j);
    this.props.storeAnswer(j);
  } 

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