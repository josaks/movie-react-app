import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Comment from './comment';
import Typography from '@material-ui/core/Typography';


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

// const GriddleLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
//   <div>
//     <Table />
//   </div>
// );
//
// return(
//   <Griddle data={comments} components={{Layout: GriddleLayout}}>
//     <RowDefinition>
//       <ColumnDefinition id='text' title="Comment" />
//       <ColumnDefinition id='author' title="User" />
//     </RowDefinition>
//   </Griddle>
// );
