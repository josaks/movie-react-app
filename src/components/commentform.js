import React, { Component } from 'react';
import { myAPIAxios } from "../myapi";
import Button from '@material-ui/core/Button';
import { loggedIn, login } from '../authentication';
import Input from '@material-ui/core/Input';

/*
  Represents a form to submit comments
*/
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

  validate = text => {
    if(text === "") return false;
    return true;
  }

  handleSubmit (event) {
    if(!loggedIn()){
      event.preventDefault();
      login();
    }
    else if(!this.validate(this.state.text)) {
      event.preventDefault();
      alert("Can't submit empty comment");
    }
    else{
      this.saveComment();
    }
  }

  saveComment = async () => {
    const { movieId } = this.props;
    const { text } = this.state;

    await myAPIAxios.post('addcomment/', {
      MovieId: movieId,
      text: text,
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} className="commentForm">
          <Input
            value={this.state.inputvalue}
            onChange={this.handleChange}
            multiline={true}
            placeholder="Write a comment"
            fullWidth
          />
          <Button variant="outlined" color="primary" type="submit">
            Submit
          </Button>
        </form>
    );
  }
}

export default CommentForm;
