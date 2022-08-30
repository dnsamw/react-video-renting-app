import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { name, label, value, onChange, type = 'text', error } = this.props;
    return (
      <>
        <div className="for-group">
          <label htmlFor={name}>{label}</label>
          <input
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            id={name}
            className="form-control"
          />
        </div>
        {error && (
          <div className="alert alert-danger mt-1 p-1">{error}</div>
        )}
      </>
    );
  }
}

export default Input;
