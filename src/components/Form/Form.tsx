import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { UserLoginForm } from '../../features/user/UserLoginForm';
import { UserRegistrationForm } from '../../features/user/UserRegistrationForm';

type Props = {
  isRegistration: boolean;
};

export const Form = ({ isRegistration }: Props) =>
  isRegistration ? (
    <>
      <UserRegistrationForm />
      <p>
        or <Link to={ROUTES.MAIN}>enter an existing account</Link>
      </p>
    </>
  ) : (
    <>
      <UserLoginForm />

      <p>
        or <Link to={ROUTES.REGISTRATION}>create an account</Link>
      </p>
    </>
  );
