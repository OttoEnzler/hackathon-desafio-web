import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import { useEffect, useState } from 'react';
import InicioPage from './pages/inicio/InicioPage';



function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path='/inicio' element={<InicioPage/>}/>
    </Routes>
  );
}

export default App;
