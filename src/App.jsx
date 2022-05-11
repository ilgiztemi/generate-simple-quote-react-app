import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: [],
      page: 0
    };
  }
  componentDidMount() {
    const api = "https://type.fit/api/quotes";
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ array: data });
        console.log(this.state.array[0]);
      });
  }
  changeQuotes = () => {
    const { array, page } = this.state;
    if (page < array.length - 1) {
      this.setState({ page: page + 1 });
    }
  };

  render() {
    const { array, page } = this.state;
    return (
      <div className="container">
        <div className="content">
          <i className="fa-solid fa-quote-left"></i>
          <p id="qoute">{array[page]?.text}</p>
          <p id="qoute-by">
            {array[page]?.author ? array[page]?.author : "No Author"}
          </p>
          <div className="flex">
            <button onClick={this.changeQuotes} id="btn">
              Next quote
            </button>
            <i className="fa-brands fa-twitter-square"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
