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
import axios from "axios";

export default function SignupCard() {
    // state for password visibility
    const [showPassword, setShowPassword] = useState(false);
    // state for form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    // handle change for form data
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    // handle submit for form data
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // axios request to register user
        axios
            .post("http://localhost:5002/api/users/register", formData)
            .then((res) => {
                // store token in local storage
                localStorage.setItem("id", res.data._id);
                localStorage.setItem("email", res.data.email);

                // redirect to home page
                window.location.href = "/";
            });
    };
    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Text fontSize={"4xl"} textAlign={"center"} color={"black"}>
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
                                <FormControl id="firstNameControl" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input
                                        type="text"
                                        id="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastNameControl">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input
                                        type="text"
                                        id="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="emailControl" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="passwordControl" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    type={showPassword ? "text" : "password"}
                                />
                                <InputRightElement h={"full"}>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            setShowPassword(
                                                (showPassword) => !showPassword
                                            )
                                        }
                                    >
                                        {showPassword ? (
                                            <ViewIcon />
                                        ) : (
                                            <ViewOffIcon />
                                        )}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                onClick={handleSubmit}
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
                                <Link
                                    as={RouterLink}
                                    to="/login"
                                    color={"blue.400"}
                                >
                                    Login
                                </Link>
                            </Text>
                        </Stack>
                        <Button
                            w={"full"}
                            variant={"outline"}
                            leftIcon={<FcGoogle />}
                        >
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
