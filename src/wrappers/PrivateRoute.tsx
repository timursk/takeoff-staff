import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { ROUTES } from '../constants/routes';
import { selectIsAuth } from '../features/user/userSlice';

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const isAuth = useAppSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to={ROUTES.MAIN} replace />;
  }

  return <>{children}</>;
};
