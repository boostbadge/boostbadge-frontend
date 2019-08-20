import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Form from '../Form';
import Error from '../ErrorMessage';
import { LOGIN_USER_QUERY } from '../../queries/LOGIN_USER_QUERY';
import { CURRENT_USER_QUERY } from '../../queries/CURRENT_USER_QUERY';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Mutation mutation={LOGIN_USER_QUERY} variables={this.state} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
        {(login, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await login();
              this.setState({ email: '', password: '' });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Log In</h2>
              <Error error={error} />
              <label htmlFor="email">
                Email
                <input type="email" name="email" placeholder="email" value={email} onChange={this.saveToState} />
              </label>
              <label htmlFor="password">
                Password
                <input type="password" name="password" placeholder="password" value={password} onChange={this.saveToState} />
              </label>
              <button type="submit">Log In</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Login;
