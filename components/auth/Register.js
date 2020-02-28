import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Form from '../util/Form';
import Error from '../util/ErrorMessage';
import { REGISTER_USER_QUERY } from '../../queries/REGISTER_USER_QUERY';
import { GET_CURRENT_USER_QUERY } from '../../queries/GET_CURRENT_USER_QUERY';

class Register extends Component {
  state = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, email, firstName, lastName, password } = this.state;
    return (
      <Mutation
        mutation={REGISTER_USER_QUERY}
        variables={this.state}
        refetchQueries={[{ query: GET_CURRENT_USER_QUERY }]}
      >
        {(register, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await register();
              this.setState({
                username: '',
                email: '',
                firstName: '',
                lastName: '',
                password: '',
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Register</h2>
              <Error error={error} />
              <label htmlFor="username">
                Username
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={username}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="firstName">
                First Name
                <input
                  type="text"
                  name="firstName"
                  placeholder="firstName"
                  value={firstName}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="lastName">
                Last Name
                <input
                  type="text"
                  name="lastName"
                  placeholder="lastName"
                  value={lastName}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={this.saveToState}
                />
              </label>
              <button type="submit">Register</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Register;
