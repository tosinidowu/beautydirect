import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import Search from './pages/Search';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import Theme from './Theme';
import customTheme from './components/Header';
import IGServiceSearch from './components/IGServicesSearch';

function App() {
  const [backendData, setBackendData] = useState([{}])

  return (
      <ChakraProvider>     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/igsearch" element={<IGServiceSearch />}></Route>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
