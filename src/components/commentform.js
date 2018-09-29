import React, { Component } from 'react';
import { myAPIAxios } from "../myapi";
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button';
import { authContext, loggedIn, login, getDecodedToken } from '../authentication';

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
    if(!loggedIn()) event.preventDefault();
    this.saveComment();
  }

  saveComment = async () => {
    const { movieId } = this.props;
    const { text } = this.state;
    const { email } = getDecodedToken();

    await myAPIAxios.post('addcomment', {
      movieId: movieId,
      text: text,
      author: email,
      Date: new Date(),
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
            <Button variant="outlined" color="primary" type="submit">
              Submit
            </Button>
          </form>
      </div>
    );
  }
}

export default CommentForm;
