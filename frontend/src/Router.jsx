import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Generate from './pages/Generate';
import About from './pages/About';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Generate />} />
      <Route path="/generate/:id" element={<About />} />
    </Routes>
  );
}

export default Router;
