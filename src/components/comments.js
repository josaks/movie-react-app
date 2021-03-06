import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Comment from './comment';
import Typography from '@material-ui/core/Typography';


/*
  Displays a list of comments
*/
export default ({ comments }) => (
  <Card>
    <Card className="commentcard">
      <CardContent>
        <Typography variant="display1">Comments</Typography>
      </CardContent>
    </Card>
    {
      comments.reverse().map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))
    }
  </Card>
);
