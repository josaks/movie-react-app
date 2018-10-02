import React, { Component } from 'react';
import Select from 'react-select';
import { myAPIAxios } from '../myapi';
import { loggedIn, login } from '../authentication';
import Button from '@material-ui/core/Button';


const option = (value) => ({ value, label: `${value}` });

const options = [
  option(1),
  option(2),
  option(3),
  option(4),
  option(5),
  option(6),
  option(7),
  option(8),
  option(9),
  option(10),
];

/*
  Displays a componenet for rating a movie from 1-10 and submitting it
*/
class Rating extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: options[0],
      isLoaded: false,
    }
  }

  componentDidUpdate() {
    const { id } = this.props.movie;
    const { isLoaded } = this.state;

    if(id !== undefined && !isLoaded){
      if(loggedIn()) this.getRating(id);
      this.setState({ isLoaded: true });
    }
  }

  getRating = (id) => {
    myAPIAxios.get(`GetRating/${id}/`).then(res => {
      const { value } = res.data;
      console.log(value);
      if(value !== null) this.setState({selectedOption: option(value)});
    }).catch(error => {
      this.setState({selectedOption: option(1)});
    });
  }

  onClick = (event) => {
    event.preventDefault();
    if(loggedIn()){
      this.onSubmit();
    }
    else{
      login();
    }
  }

  onSubmit = async () => {
    const { value } = this.state.selectedOption;
    const { id } = this.props.movie;

    await myAPIAxios.post('rate/', {
      Value: value,
      MovieId: id,
      Date: new Date(),
    }).catch(error => {
      console.error(error);
    });
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="rate">
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          maxMenuHeight={90}
        />
        <Button variant="outlined" color="primary" onClick={this.onClick}>
          Rate movie
        </Button>
      </div>
    );
  }
}

export default Rating;
