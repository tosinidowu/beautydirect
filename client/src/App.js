import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import Search from './pages/Search';
import WriteReview from './pages/WriteReview';
import SearchResult from './pages/SearchResult';
import BusinessName from './pages/BusinessName';
import ProvideBusinessEmail from './pages/ProvideBusinessEmail';
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
        <Route path="/writereview" element={<WriteReview />}></Route>
        <Route path="/searchresults" element={<SearchResult />}></Route>
        <Route path="/claimbusiness" element={<BusinessName />}></Route>
        <Route path="/providebusinessemail" element={<ProvideBusinessEmail />}></Route>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
