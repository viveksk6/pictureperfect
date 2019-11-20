import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { loadMovies } from "./actions/index.js";
import Pagination from "react-js-pagination";

class Paginate extends Component {
  componentDidMount = () => {
    loadMovies(1);
    console.log(this.props.activePage);
  };
  handlePageChange = page => {
    const { loadMovies } = this.props;
    loadMovies(page);
    console.log(this.props.activePage);
  };

  render() {
    return (
      <div>
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          disabledClass="disabled"
          activePage={this.props.activePage}
          itemsCountPerPage={3}
          totalItemsCount={6}
          pageRangeDisplayed={2}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ movies, activePage }) => ({
  movies,
  activePage
});

const mapDispatchToProps = dispatch => ({
  loadMovies: activePage => dispatch(loadMovies(activePage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Paginate);
