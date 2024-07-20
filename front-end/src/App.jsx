import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import CategoryList from './components/CategoryList.jsx';



function App() {
  return (
    <Routes>
      <Route path="/" element={<CategoryList />} />
    </Routes>
  );
}

export default App;
