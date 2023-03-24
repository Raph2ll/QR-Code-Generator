import { Route, Routes } from 'react-router-dom';
import React from 'react';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Test</h1>} />
    </Routes>
  );
}

export default Router;
