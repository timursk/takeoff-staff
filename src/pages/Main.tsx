// type Props = {};

import { useAppSelector } from '../app/hooks';
import { UserLoginForm } from '../features/user/UserLoginForm';
import { UserRegistrationForm } from '../features/user/UserRegistrationForm';

export const Main = () => {
  const user = useAppSelector((state) => state.user);
  console.log(user);

  return (
    <div>
      main
      <UserLoginForm />
      <UserRegistrationForm />
    </div>
  );
};
