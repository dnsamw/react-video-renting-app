import React, { Component } from 'react';
import Joi from 'joi-browser';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required().label('Username'),
    password: Joi.string().min(5).required().label('Password'),
  };

  validateForm() {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.account, this.schema, options);

    const errors = {};
    if (result.error != null)
      for (let item of result.error.details)
        errors[item.path[0]] = item.message;

    return errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors: errors || {} }, this.print);
  };

  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    const account = { ...this.state.account };
    account[name] = value;
    this.setState({ account }, this.print);
  };

  print() {
    console.log(this.state);
  }

  render() {
    const { account } = this.state;
    return (
      <>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username"></label>Username
            <input
              name="username"
              id="username"
              type="text"
              className="form-control"
              value={account.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>Password
            <input
              name="password"
              id="password"
              type="text"
              className="form-control"
              value={account.password}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary mt-2">Login</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
