import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import PosterColumn from './postercolumn';

const MovieInfo = ({ movie }) => {
  if(movie == null){
    const msg = 'Could not find movie :(';
    return <div>{msg}</div>
  }

  const GriddleLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
    <div>
      <Table />
    </div>
  );

  return (
    <Griddle
      data={[movie]}
      components={{Layout: GriddleLayout}}
    >
      <RowDefinition>
        <ColumnDefinition id='posterURL' title='Poster' customComponent={PosterColumn} />
        <ColumnDefinition id='title' title='Title' />
        <ColumnDefinition id='year' title='Year released' />
        <ColumnDefinition id='genres' title='Genres' />
        <ColumnDefinition id='ratings' title='Ratings' />
        <ColumnDefinition id='contentRating' title='Content rating' />
        <ColumnDefinition id='duration' title='Duration' />
        <ColumnDefinition id='releaseDate' title='Release date' />
        <ColumnDefinition id='averageRating' title='Average rating' />
        <ColumnDefinition id='originalTitle' title='Original title' />
        <ColumnDefinition id='storyline' title='Storyline' cssClassName="storylineColumn"/>
        <ColumnDefinition id='actors' title='Actors' />
        <ColumnDefinition id='imdbRating' title='IMDB rating' />
      </RowDefinition>
    </Griddle>
  );
};

export default MovieInfo;
