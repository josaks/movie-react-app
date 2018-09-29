import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import PosterCell from './postercell';
import ReleaseDateCell from './releasedatecell';
import DurationCell from './durationcell';
import Rating from './rating';
import Spacedcell from './spacedcell';


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
        <ColumnDefinition id='year' title='Year released' />
        <ColumnDefinition id='amountOfRatings' title='Amount of user ratings' />
        <ColumnDefinition id='averageRating' title='Average rating' />
        <ColumnDefinition id='contentRating' title='Content rating' />
        <ColumnDefinition id='duration' title='Duration' />
        <ColumnDefinition id='releaseDate' title='Release date' />
        <ColumnDefinition id='originalTitle' title='Original title' />
        <ColumnDefinition id='imdbRating' title='IMDB rating' />
      </RowDefinition>
    </Griddle>
  );
};

export default MovieInfo;
