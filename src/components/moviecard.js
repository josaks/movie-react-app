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
        <Poster value={posterURL} />
      </CardContent>
      <CardContent className="">
        <Typography variant="headline">{title}</Typography>
        <Typography variant="body2">{storyline}</Typography>
      </CardContent>
    </Card>
  );
};

export default moviecard;
