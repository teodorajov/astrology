import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DailyPage from './components/DailyPage';
import Navbar from './components/Navbar';
import OverviewPage from './components/OverviewPage';

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
