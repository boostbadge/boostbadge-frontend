import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import Form from '../Form';
import Error from '../ErrorMessage';
import { RESET_PASSWORD_USER_QUERY } from '../../queries/RESET_PASSWORD_USER_QUERY';
import { CURRENT_USER_QUERY } from '../../queries/CURRENT_USER_QUERY';

class ResetPassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { password, confirmPassword } = this.state;
    const { resetToken } = this.props;
    return (
      <Mutation
        mutation={RESET_PASSWORD_USER_QUERY}
        variables={{
          resetToken,
          password,
          confirmPassword,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(resetPassword, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await resetPassword();
              this.setState({ password: '', confirmPassword: '' });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Reset Password</h2>
              <Error error={error} />
              <label htmlFor="password">
                New Password
                <input type="password" name="password" placeholder="password" value={password} onChange={this.saveToState} />
              </label>
              <label htmlFor="confirmPassword">
                New Password
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  value={confirmPassword}
                  onChange={this.saveToState}
                />
              </label>
              <button type="submit">Reset Password</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

ResetPassword.propTypes = {
  resetToken: PropTypes.string.isRequired,
};

export default ResetPassword;
