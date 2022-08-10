import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { Header } from './components/Header/Header';
import { Router } from './wrappers/Router';

function App() {
  return (
    <>
      <Header />

      <Container maxWidth="lg">
        <Router />
      </Container>
    </>
  );
}

export default App;
