import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Poster from './poster';
import Rating from './rating';


/*
  A card with information about a movie's storyline, title, poster.
  Also has a button to rate the movie.
*/
const movieintro = ({ movie }) => {
  const { storyline, posterURL, title } = movie;

  return(
    <Card className="movieintro">
      <CardContent className="verticalCenter">
        <div>
          <Rating movie={movie} />
        </div>
      </CardContent>
      <CardContent className="verticalCenter">
        <Poster value={posterURL} />
      </CardContent>
      <CardContent className="verticalCenter">
        <Typography variant="headline">{title}</Typography>
        <Typography variant="body2">{storyline}</Typography>
      </CardContent>
    </Card>
  );
};

export default movieintro;
