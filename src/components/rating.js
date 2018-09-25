import React, { Component } from 'react';
import Select from 'react-select';
import { myAPIAxios } from '../myapi';


const option = (value, label) => ({ value, label });

const options = [
  option(1, "1"),
  option(2, "2"),
  option(3, "3"),
  option(4, "4"),
  option(5, "5"),
  option(6, "6"),
  option(7, "7"),
  option(8, "8"),
  option(9, "9"),
  option(10, "10"),
];

class Rating extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: option(1, "1"),
    }
  }

  onSubmit = async () => {
    const { value } = this.state.selectedOption;
    const { id } = this.props.movie;

    await myAPIAxios.post('rate/', {
      Value: value,
      MovieId: id,
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
        />
        <button onClick={this.onSubmit}>
          Rate movie
        </button>
      </div>
    );
  }
}

export default Rating;
