import React, { Component } from 'react';
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react';
import Poster from './poster';
import { myAPIAxios } from "../myapi";


/*
  Represents the home page
*/
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
    await myAPIAxios.get('movies').then(res => {
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
          <ColumnDefinition id='posterURL' title='Poster' customComponent={Poster} />
          <ColumnDefinition id='title' title='Title' />
          <ColumnDefinition id='year' title='Year released' />
          <ColumnDefinition id='averageRating' title='Average rating' />
          <ColumnDefinition id='id' title='Details' customComponent={ViewMovieColumn} />
        </RowDefinition>
      </Griddle>
    );
  }
}
