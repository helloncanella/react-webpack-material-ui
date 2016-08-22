import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      0.25
    ) 
  }

  increment() {
    this.setState(({ counter }) => {
      return {counter: counter + 64654546665465454656454656};
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { counter } = this.state;

    return (
      <header>
        <div>Oi is doing its thing with React and ES2015</div>
        <div>{counter}</div>
      </header>
    );
  }
}