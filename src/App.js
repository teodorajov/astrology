import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import OverviewPage from './components/OverviewPage';
import DailyPage from './components/DailyPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<DailyPage />} />
        <Route path='/overview' element={<OverviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
