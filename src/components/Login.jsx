import React, { Component } from 'react';
import Joi from 'joi-browser';

import Input from './common/Input';

class Login extends Component {
  state = {
    account: { username: '', password: '' },
  };

  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    const account = { ...this.state.account };
    account[name] = value;
    this.setState({ account });
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form>
          <Input
            name="username"
            label="username"
            value={this.state.account.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={this.state.account.password}
            onChange={this.handleChange}
          />
        </form>
      </>
    );
  }
}

export default Login;
