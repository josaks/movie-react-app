import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PosterCell from './postercell';
import Rating from './rating';

const moviecard = ({ movie }) => {
  const { storyline, posterURL, title } = movie;

  return(
    <Card className="moviecard">
      <CardContent className="">
        <div>
          <Rating movie={movie} />
        </div>
      </CardContent>
      <CardContent>
        <PosterCell value={posterURL} />
      </CardContent>
      <CardContent className="">
        <Typography variant="headline">{title}</Typography>
        <Typography variant="body2">{storyline}</Typography>
      </CardContent>
    </Card>
  );
};

export default moviecard;
