import React, { Component } from 'react';
import Joi from 'joi-browser';

import Input from './common/Input';

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
    //console.log(result);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();

    this.setState({ errors: errors || {} }, this.print);

    if (errors === {}) console.log('Form Sunmitted');
  };

  validateProperty(name, value) {
    const subSchema = this.schema[name];
    const result = Joi.validate(value, subSchema);
    const errorMessage = result.error?.details[0].message;
    return errorMessage ? errorMessage : null;
  }

  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;

    const errors = { ...this.state.errors };
    const error = this.validateProperty(name, value);
    if (error) errors[name] = error;
    if (!error) delete errors[name];

    //console.log('BSE', errors);
    const account = { ...this.state.account };
    account[name] = value;
    this.setState({ account, errors }, this.print);
  };

  print() {
    //console.log(this.state);
  }

  render() {
    const { account, errors } = this.state;
    return (
      <>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            label="Username"
            name="username"
            value={account.username}
            onChange={this.handleChange}
            error={errors?.username}
          />
          <Input
            label="Password"
            name="password"
            value={account.password}
            onChange={this.handleChange}
            error={errors?.password}
          />
          <button
            disabled={this.validateForm()}
            className="btn btn-primary mt-2"
          >
            Login
          </button>
        </form>
      </>
    );
  }
}

export default LoginForm;
