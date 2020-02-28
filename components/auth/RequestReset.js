import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Form from '../util/Form';
import Error from '../util/ErrorMessage';
import { REQUEST_RESET_USER_QUERY } from '../../queries/REQUEST_RESET_USER_QUERY';

class RequestReset extends Component {
  state = {
    email: '',
    successMessage: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, successMessage } = this.state;
    return (
      <Mutation mutation={REQUEST_RESET_USER_QUERY} variables={this.state}>
        {(requestReset, { error, loading, called }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              const { data } = await requestReset();
              this.setState({
                email: '',
                successMessage: data.requestReset.message,
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Request Password Reset</h2>
              <Error error={error} />
              {!error && !loading && called && <p>{successMessage}</p>}
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
              <button type="submit">Request Password Reset</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default RequestReset;
