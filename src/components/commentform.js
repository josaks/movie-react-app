import React, { Component } from 'react';
import { myAPIAxios } from "../myapi";
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button';

class CommentForm extends Component {
  constructor (props) {
      super(props);
      this.state = {
          text: '',
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
      this.setState({
          text: event.target.value,
      });
  }

  handleSubmit (event) {
      this.saveComment();
  }

  saveComment = async () => {
    const { movieId } = this.props;
    const { text } = this.state;

    await myAPIAxios.post('addcomment', {
      movieId: movieId,
      text: text,
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="commentForm">
          <form onSubmit={this.handleSubmit}>
            <Input
              value={this.state.inputvalue}
              onChange={this.handleChange}
              multiline={true}
              placeholder="Write a comment"
            />
            <Button type="submit">
              Submit
            </Button>
          </form>
      </div>
    );
  }
}

export default CommentForm;

// <form onSubmit={this.handleSubmit}>
//     <label>Write a comment</label>
//     <input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>
//     <input type="submit" value="Submit"/>
// </form>
