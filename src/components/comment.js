import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


/*
  Represents one comment
*/
const comment = ({ comment }) => {
  const { text, author } = comment;
  let { date } = comment;
  date = date.replace("T", " ").split(".")[0];

  return (
    <Card className="commentcard">
      <CardContent>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
      <CardContent className="commentAuthor">
        <Typography variant="caption">{author} - {date}</Typography>
      </CardContent>
    </Card>
  );
};

export default comment;
