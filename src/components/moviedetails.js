import React, { Component } from 'react';
import Comments from "./comments";
import CommentForm from './commentform';
import { myAPIAxios } from "../myapi";
import Movieintro from './movieintro';
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
    const { genres, actors, year, amountOfRatings,
       averageRating, duration, releaseDate,
       originalTitle, imdbRating } = movie;

    return (
      <div>
        <Movieintro movie={movie} />
          <Card className="genresAndActors">
            <CardContent className="verticalCenter">
              <b>Genres:</b>
              {genres.map(genre => <div>{genre}</div>)}
            </CardContent>
            <CardContent className="verticalCenter">
              <b>Actors:</b>
              {actors.map(actor => <div>{actor}</div>)}
            </CardContent>
            <CardContent className="verticalCenter">
              <b>Year</b>
              {year}
            </CardContent>
            <CardContent className="verticalCenter">
              <b>Amount of ratings</b>
              {amountOfRatings}
            </CardContent>
            <CardContent className="verticalCenter">
              <b>Average rating</b>
              {averageRating}
            </CardContent>
            <CardContent className="verticalCenter">
              <b>Duration</b>
              {duration}
            </CardContent>
            <CardContent className="verticalCenter">
              <b>Release date</b>
              {releaseDate}
            </CardContent>
            <CardContent className="verticalCenter">
              <b>Original title</b>
              {originalTitle}
            </CardContent>
            <CardContent className="verticalCenter">
              <b>IMDB rating</b>
              {imdbRating}
            </CardContent>
          </Card>
        <Comments comments={movie.comments} />
        <CommentForm movieId={movie.id} />
      </div>
    );
  }
}
