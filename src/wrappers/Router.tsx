import { Contacts } from '@mui/icons-material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { selectIsAuth } from '../features/user/userSlice';
import { Main } from '../pages/Main';
import { PrivateRoute } from './PrivateRoute';
import { useAppSelector } from '../app/hooks';

export const Router = () => {
  const isAuth = useAppSelector(selectIsAuth);

  if (!isAuth) {
    return <Main />;
  }

  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<Main />} />

      <Route
        path={ROUTES.CONTACTS}
        element={
          <PrivateRoute>
            <Contacts />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Navigate to={ROUTES.MAIN} replace />} />
    </Routes>
  );
};
