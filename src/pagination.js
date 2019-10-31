import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { loadMovies } from "./actions/index.js";
import Pagination from "react-js-pagination";
import "bootstrap/scss/bootstrap.scss";
//require("bootstrap/less/bootstrap.less");

class Paginate extends Component {
  state = {
    activePage: 15
  };

  handlePageChange = pageNumber => {
    const { loadMovies } = this.props;
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
    loadMovies();
  };

  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies
});

const mapDispatchToProps = dispatch => ({
  loadMovies: () => dispatch(loadMovies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paginate);
