import React, { Component } from 'react';
import Joi from 'joi-browser';

import Input from './common/Input';

class Login extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  };

  validateForm() {
    const account = { ...this.state.account };
    const options = { abortEarly: false };
    const result = Joi.validate(account, this.schema, options);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors });
  };

  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    const account = { ...this.state.account };
    account[name] = value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="username"
            value={account.username}
            onChange={this.handleChange}
            error={errors?.username}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors?.password}
          />
          <button className="btn btn-primary mt-2">Login</button>
        </form>
      </>
    );
  }
}

export default Login;
