import React, { Component } from 'react';
import MovieInfo from './movieinfo';
import Comments from "./comments";
import CommentForm from './commentform';
import { myAPIAxios } from "../myapi";
import Moviecard from './moviecard';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


/*
  Page that show detailed information about a movie
*/
export default class MovieDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      movie: {
        title: "loading",
        comments: [],
        genres: [],
        actors: []
      },
    }
  }

  componentDidMount() {
    const parameterId = this.props.match.params.number;
    const movieId = parseInt(parameterId, 10);
    this.getMovie(movieId);
  }

  getMovie = async (id) => {
    await myAPIAxios.get('movie/' + id).then(res => {
      this.setState({
        movie: res.data,
      });
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    const { movie } = this.state;
    const { genres, actors } = movie;

    return (
      <div>
        <Moviecard movie={movie} />
        <div className="details">
          <Card className="genresAndActors">
            <CardContent className="verticalCenter">
              {genres.toString()}
            </CardContent>
            <CardContent className="verticalCenter">
              {actors.toString()}
            </CardContent>
          </Card>
          <MovieInfo movie={movie} />
        </div>
        <Comments comments={movie.comments} />
        <CommentForm movieId={movie.id} />
      </div>
    );
  }
}
