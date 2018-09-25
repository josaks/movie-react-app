import React, { Component } from 'react';
import { myAPIAxios } from '../myapi';
import { getToken, authContext } from '../authentication';

class LoggedInName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Not logged in",
      loggedIn: false,
    };
  }

  componentDidMount() {
    this.getName();
  }

  getName = async () => {
    await myAPIAxios.get('name').then(res => {
      this.setState({
        name: res.data,
        loggedIn: true,
      });
    });
  }

  logout = () => authContext.logOut();

  render() {
    const { name, loggedIn } = this.state;

    return (
      <div>
        {
          loggedIn &&
          <div>
            <div>Username: {name}</div>
            <div onClick={this.logout}>Log out</div>
          </div>
        }
      </div>
    );
  }
}

export default LoggedInName;
