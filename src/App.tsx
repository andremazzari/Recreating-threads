import React from 'react';
import { Profile } from './pages/Profile';
import { GlobalStyles } from './styled';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route path='/:username' element={<Profile/>}/>
        <Route path='/' element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
