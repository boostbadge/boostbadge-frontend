import Link from 'next/link';
import Login from '../components/auth/Login';

const LoginPage = () => (
  <div>
    <Login />
    <Link href="/forgotpassword">
      <a>Forgot your password?</a>
    </Link>
  </div>
);

export default LoginPage;
