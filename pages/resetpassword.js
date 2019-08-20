import PropTypes from 'prop-types';
import ResetPassword from '../components/auth/ResetPassword';

const ResetPasswordPage = ({ query: { resetToken } }) => (
  <div>
    <ResetPassword resetToken={resetToken} />
  </div>
);

ResetPasswordPage.propTypes = {
  query: PropTypes.object.isRequired,
  resetToken: PropTypes.string.isRequired,
};

export default ResetPasswordPage;
