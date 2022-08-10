import { Contacts } from '@mui/icons-material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { Main } from '../pages/Main';
import { PrivateRoute } from './PrivateRoute';

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<Main />} />
      <Route path={ROUTES.REGISTRATION} element={<Main />} />

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
