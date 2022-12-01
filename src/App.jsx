import React from 'react';
import { Routes, Route } from 'react-router-dom';
import pages from './pages';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<pages.LoginPage />} />
      <Route exact path="/register" element={<pages.RegisterPage />} />
      <Route exact path="/addgame" element={<pages.AddGamePage />} />
      <Route exact path="/games" element={<pages.GamesPage />} />
      <Route exact path="/details/:id" element={<pages.DetailsPage />} />
    </Routes>
  );
}

export default App;
