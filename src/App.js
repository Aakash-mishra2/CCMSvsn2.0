import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Citizens from './citizens/pages/Citizens';
import NewCases from './court/pages/NewCases';
import RegisteredCases from './court/pages/RegisteredCases';

import './App.css';

function App() {
  let routes = (
    <Routes>
      <Route path="/" element={< Citizens />} />
      <Route path="/cases/new" element={<NewCases />} />
      <Route path="/:uid/cases" element={< RegisteredCases />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

export default App;
