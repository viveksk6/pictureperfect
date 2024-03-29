import React, { Component } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadMovies } from "./actions";

class Cards extends Component {
  componentDidMount() {
    this.props.loadMovies();
  }

  render() {
    const { movies } = this.props;
    //const { dispatch } = this.props;
    //dispatch(setMovies(movieData));
    //console.log(this.props.movies);
    //console.log(dispatch);
    if (movies !== null) {
      return (
        <CardDeck>
          {movies.map((x, index) => {
            return (
              <Card key={index}>
                <Link to={{ pathname: `/${x.movieId}` }}>
                  <Card.Img variant="top" src={x.img} className="movie" />
                </Link>
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
    } else {
      return <p>No movies found</p>;
    }
  }
}

const mapStateToProps = ({ movies }) => ({
  movies
});

const mapDispatchToProps = dispatch => ({
  loadMovies: () => dispatch(loadMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
