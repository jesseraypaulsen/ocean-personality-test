import React, { Component } from 'react';

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
    this.props.pushAnswer(j);
    this.props.storeAnswer(j);
  } 

  //https://getbootstrap.com/docs/5.0/components/card/
  //https://getbootstrap.com/docs/5.0/forms/checks-radios/#radios
  render() {
    let { text, choices, id } = this.props.item;
    return (
      <div className="card">
        <div className="card-header">{text}</div>
        <div className="list-group list-group-flush">
          {choices.map((choice, i) => 
            <div key={i} className="list-group-item">
              <div className="form-check">
                <input 
                  className="form-check-input mt-0"
                  type="radio" 
                  id={i} 
                  value={choice.score} 
                  name={id}
                  onClick={this.handler}
                ></input>
                <label for={i} className="form-check-label">{choice.text}</label>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}