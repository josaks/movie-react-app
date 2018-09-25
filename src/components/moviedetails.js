import React, { Component } from 'react';
import MovieInfo from './movieinfo';
import Comments from "./comments";
import CommentForm from './commentform';
import { myAPIAxios } from "../myapi";
import Rating from './rating';

export default class MovieDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      movie: {title: "loading", comments: []},
    }
  }

  componentDidMount() {
    const movieId = parseInt(this.props.match.params.number, 10);
    this.getMovie(movieId);
  }

  getMovie = async (id) => {
    await myAPIAxios.get('movie/' + id).then(res => {
      this.setState({
        movie: res.data,
      });
      console.log(res.data.comments)
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    const { movie } = this.state;

    return (
      <div>
        <MovieInfo movie={movie} />
        <div className="ratingContainer">
          <Rating movie={movie} />
        </div>
        <div className="commentSection">
          <Comments comments={movie.comments} />
          <CommentForm movieId={movie.id} />
        </div>
      </div>
    );
  }
}
