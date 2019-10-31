import React, { Component } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { setMovies } from "./actions/index.js";
import movieData from "./movieData.json";

class Cards extends Component {
  componentDidMount() {
    //this.setState({ movies: movieData });
  }

  render() {
    const { movies } = this.props.movies;
    const { dispatch } = this.props;
    //dispatch(setMovies(movieData));
    //console.log(movies);
    //console.log(dispatch);
    return (
      <CardDeck>
        {movies.map((x, index) => {
          return (
            <Card key={index}>
              <Card.Img variant="top" src={x.imgpath} className="movie" />
              <Card.Body>
                <Card.Title>{x.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {x.rating}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          );
        })}
      </CardDeck>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies
});

export default connect(
  mapStateToProps,
  null
)(Cards);
