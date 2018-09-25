import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';

export default ({ comments }) => {
  // const Comms = comments.map(comment => (
  //   <div key={comment.id} className="comment">
  //     <div>{comment.text}</div>
  //     <div>{comment.author}</div>
  //   </div>
  // ));

  const GriddleLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
    <div>
      <Table />
    </div>
  );

  return(
    <Griddle data={comments} components={{Layout: GriddleLayout}}>
      <RowDefinition>
        <ColumnDefinition id='text' title="Comment" />
        <ColumnDefinition id='author' title="User" />
      </RowDefinition>
    </Griddle>
  );
};
