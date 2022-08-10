import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { Navigate, useMatch } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { Form } from '../components/Form/Form';
import { ROUTES } from '../constants/routes';
import { selectIsAuth } from '../features/user/userSlice';

export const Main = () => {
  const isRegistration = useMatch(ROUTES.REGISTRATION);
  const isAuth = useAppSelector(selectIsAuth);

  if (isAuth) {
    return <Navigate to={ROUTES.CONTACTS} replace />;
  }

  return (
    <Container>
      <StyledPaper elevation={2}>
        <Form isRegistration={!!isRegistration} />
      </StyledPaper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

const StyledPaper = styled(Paper)`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px;
`;
