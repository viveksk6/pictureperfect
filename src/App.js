import React, { Component } from "react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./navigation";
import Paginate from "./pagination";
import Cards from "./cards";
import configureStore from "./store";
import "./App.css";

const store = configureStore();

class App extends Component {
  state = {
    counter: 0
  };
  getName = () => {
    return "Now Showing";
  };
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="left-top0">
            <Navigation />
          </div>

          <div className="left-top">
            <h2>{this.getName()}</h2>
          </div>

          <div className="left-top2">
            <Cards />
          </div>

          <div className="left-top3">
            <Paginate />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
