import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import axios from 'axios';
import PosterColumn from './postercell';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      movies: [],
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const baseurl = "http://themovieapi.azurewebsites.net/api";
    await axios.get(baseurl + '/movies').then(res => {
      this.setState({
        movies: res.data,
      });
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    const ViewMovieColumn = ({value}) => {
      const link = 'movie/' + value;
      return <a href={link}>More info</a>;
    }

    const GriddleLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
      <div>
        <Table />
      </div>
    );

    return(
      <Griddle data={this.state.movies} components={{Layout: GriddleLayout}}>
        <RowDefinition>
          <ColumnDefinition id='posterURL' title='Poster' customComponent={PosterColumn} />
          <ColumnDefinition id='title' title='Title' />
          <ColumnDefinition id='year' title='Year released' />
          <ColumnDefinition id='averageRating' title='Average rating' />
          <ColumnDefinition id='id' title='Details' customComponent={ViewMovieColumn} />
        </RowDefinition>
      </Griddle>
    );
  }
}
