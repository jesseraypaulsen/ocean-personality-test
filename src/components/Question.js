import React, { Component } from 'react';

export default class Question extends Component {

  afterHandler = () => {
    let { id, domain, facet, score } = this.props.item;
    let j = { id, domain, facet, score };
    this.props.pushAnswer(j);
    this.props.storeAnswer(j);
  }
  
  handler = (id, e) => {
    this.props.setScore(id, e.target.value, this.afterHandler);
  }

  // we need to pass the id from props.item into props.setScore,
  // so the latter can iterate over the array of objects (items) in state and
  // compare each id to the one selected here, and when it finds the right object,
  // score is set to event.target.value.

  //https://getbootstrap.com/docs/5.0/components/card/
  //https://getbootstrap.com/docs/5.0/forms/checks-radios/#radios
  render() {
    let { text, choices, id, score } = this.props.item;
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
                  onClick={(e) => this.handler(id, e)}
                  ></input>
                  {/* TODO: use item.score in a ternary to select a radio if state says the user selected it before */}
                <label for={i} className="form-check-label">{choice.text}</label>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}