import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Auth from './pages/Auth';

function App() {
  return (
    <BrowserRouter>
    <div className="page-container">
      <div className = "nav-container">
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/login" element={<Auth />} />
      </Routes>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
