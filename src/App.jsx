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
    // setTimeout(() => {
    // }, 2000)

    // .catch((error) => console.log(error));
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
          {/* {array.map((item) => (
            <div key={item.page}>
              <p id="qoute">{item.text}</p>
              <p id="qoute-by">{item.author}</p>
            </div>
          ))} */}
          <p id="qoute">{array[page]?.text}</p>
          <p id="qoute-by">{array[page]?.author}</p>
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
