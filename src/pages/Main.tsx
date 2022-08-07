import { Container } from '@mui/material';
import { useAppSelector } from '../app/hooks';
import { UserLoginForm } from '../features/user/UserLoginForm';
import { UserRegistrationForm } from '../features/user/UserRegistrationForm';

export const Main = () => {
  const { name, isAuth, isLoading } = useAppSelector((state) => state.user);

  return (
    <Container maxWidth="lg">
      main
      <UserLoginForm />
      <UserRegistrationForm />
    </Container>
  );
};
