import { Component } from 'react';
import Question from './Question';
const { getItems } = require('@alheimsins/b5-johnson-120-ipip-neo-pi-r');

export default class Questions extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.setState({ items: getItems() });
  }

  render() {
    return (
      <div className="container">
        {this.state.items.map((item, index) => {
          return <Question item={item} index={index} />;
        })}
      </div>
    );
  }
}


