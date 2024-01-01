import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function Login() {
  return  (
    <div className="login">
      <Header />
      <LoginForm />
    </div>
  );
};

export default Login;