import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Generate from './pages/Generate';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Generate />} />
    </Routes>
  );
}

export default Router;
