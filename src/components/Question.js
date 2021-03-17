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

  // componentDidMount() {
  //   let {id, domain, facet} = this.props;
  //   this.setState({ 
  //     id: id, 
  //     domain: domain, 
  //     facet: facet 
  //   });
  // }

  handler = e => {
    this.setState({ score: e.target.value });
    console.log(this.state);
  }

  render() {
    let { index } = this.props;
    let { text, id, choices } = this.state;
    return (<div key={index}>
      <div className="question">{index+1}. {text}</div>
      <RadioSet choices={choices} id={id} handler={this.handler} />
    </div>)
  }
}