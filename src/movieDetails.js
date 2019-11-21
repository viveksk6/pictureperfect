import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { connect } from "react-redux";
import { loadMovieDetails } from "./actions";

class movieDescription extends Component {
  componentDidMount = () => {
    const movieID = this.props.match.params.movieID;
    this.props.loadMovieDetails(movieID);

    //console.log(this.props);
  };
  render() {
    const { movieDetails } = this.props.movieDetails;
    //console.log(movieDetails);
    return (
      <div>
        <div>
          <img src="grey.jpg" alt="" className="bg-image" />
          <img src={movieDetails[0].img} alt="" className="movie-image" />
          <h2 className="movie-name">{movieDetails[0].title}</h2>
          <h5 className="certificate">
            ({movieDetails[0].certificate}) | {movieDetails[0].language} |{" "}
            {movieDetails[0].genre}
          </h5>
          <Button variant="primary" className="shows-button">
            View Shows
          </Button>
        </div>
        <div className="tab">
          <Tabs defaultActiveKey="summary" id="uncontrolled-tab-example">
            <Tab eventKey="summary" title="Summary">
              <p>{movieDetails[0].summary}</p>
            </Tab>
            <Tab eventKey="review" title="Review"></Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ movieDetails }) => ({
  movieDetails
});

const mapDispatchToProps = dispatch => ({
  loadMovieDetails: movieId => dispatch(loadMovieDetails(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(movieDescription);
