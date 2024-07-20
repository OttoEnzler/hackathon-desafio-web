import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import { useEffect, useState } from 'react';
import InicioPage from './pages/inicio/InicioPage';
import LugaresPage from './pages/lugares/LugaresPage';
import LugarPage from './pages/lugares/LugarPage';



function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path='/inicio' element={<InicioPage />} />
      <Route path='/lugares/:name' element={<LugaresPage/>} />
      <Route path='/lugar/:placeId' element={<LugarPage/>} />
    </Routes>
  );
}

export default App;
