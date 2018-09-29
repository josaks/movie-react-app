import React, { Component } from 'react';
import { myAPIAxios } from '../myapi';
import { authContext, loggedIn } from '../authentication';
import LogoutButton from './logoutbutton';


class LoggedInName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Not logged in",
    };
  }

  componentDidMount() {
    this.getName();
  }

  getName = async () => {
    await myAPIAxios.get('name').then(res => {
      this.setState({
        name: res.data,
      });
    });
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <div>Username: {name}</div>
        <LogoutButton />
      </div>
    );
  }
}

export default LoggedInName;
