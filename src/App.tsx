import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { Main } from './pages/Main';
import { Contacts } from './pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<Main/>} />
        <Route path={ROUTES.CONTACTS} element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
