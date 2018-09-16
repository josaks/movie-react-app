import React, { Component } from 'react';
import axios from 'axios';
import MovieInfo from './movieinfo';

export default class MovieDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      movie: {title: "loading"},
    }
  }

  componentDidMount() {
    const movieId = parseInt(this.props.match.params.number, 10);
    this.getMovie(movieId);
  }

  getMovie = async (id) => {
    const baseurl = "http://themovieapi.azurewebsites.net/api";
    await axios.get(baseurl + '/movies/' + id).then(res => {
      this.setState({
        movie: res.data,
        isLoading: true,
      });
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    const { movie } = this.state;

    return (
      <div>
        <MovieInfo movie={movie} />
      </div>
    );
  }
}
