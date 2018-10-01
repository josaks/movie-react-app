import React, { Component } from 'react';
import { myAPIAxios } from "../myapi";
import Button from '@material-ui/core/Button';
import Form from 'react-validation/build/form';
import TextArea from 'react-validation/build/textarea';
import { loggedIn, login } from '../authentication';


const required = (value) => {
  if (!value.toString().trim().length) {
    return 'Required';
  }
};

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

  handleSubmit (event) {
    event.preventDefault();
    if(loggedIn()){
      this.saveComment();
    }
    else{
      login();
    }
  }

  saveComment = async () => {
    const { movieId } = this.props;
    const { text } = this.state;

    await myAPIAxios.post('addcomment/', {
      MovieId: movieId,
      Text: text,
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="commentForm">
          <Form ref={form => { this.form = form}} onSubmit={this.handleSubmit}>
            <TextArea
              name="comment"
              validations={[required]}
              placeholder="Write a comment"
            />
            <Button variant="outlined" color="primary" type="submit">
              Submit
            </Button>
          </Form>
      </div>
    );
  }
}

export default CommentForm;

/*
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
*/
