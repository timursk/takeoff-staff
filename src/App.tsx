import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { Main } from './pages/Main';
import { Contacts } from './pages/Contacts';
import { PrivateRoute } from './wrappers/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
