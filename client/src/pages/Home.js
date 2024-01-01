import React from 'react';
import '../assets/Home.css';
import Header from '../components/Header';
import Landing from '../components/Landing';

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
  

function Home(){
    return(
        <div className="home">
            <Header />
            <Landing />
        </div>
    );
};

export default Home;