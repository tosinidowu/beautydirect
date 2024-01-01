import { Link as RouterLink } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Center } from "@chakra-ui/layout";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const express = require('express');
const formData = new FormData();

const app = express();
const PORT = 5000;

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  /*const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data);

      if (response.ok){
        console.log('User registered successfully!');
      }
      else {
        console.error("Error registering user");
      }
    }
    catch (error){
      console.error("Error registering user", error);
    }
  }*/
};

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Text fontSize={"4xl"} textAlign={"center"} color={'black'}>
            Sign up for Beauty Direct
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          w={"464px"}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input 
                    type="text"
                    id = "lastName"
                    value={formData.lastName}
                    onChange={handleChange} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"red.400"}
                color={"white"}
                _hover={{
                  bg: "pink.800",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={1}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link as={RouterLink} to="/login" color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
            <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
              <Center>
                <Text>Sign up with Google</Text>
              </Center>
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
