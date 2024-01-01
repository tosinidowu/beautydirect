import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
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

function SignUp() {
  return (
    <div className="signup">
      <Header />
      <SignUpForm />
    </div>
  );
};

export default SignUp;