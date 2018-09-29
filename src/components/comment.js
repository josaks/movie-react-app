import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const comment = ({ comment }) => {
  const { text, author, date } = comment;

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
