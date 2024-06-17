import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../assets/AdobeStock_569533454.jpeg";
import { FaAt } from 'react-icons/fa';
import { Icon } from "@chakra-ui/react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  HStack,
  VStack,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/layout";


const IGServiceSearch = ({page, setPage}) =>{
    return (
    /* center the search bar horizontally and vertically*/
    <Center h="80vh">
      <VStack>
        <Text
          as="b"
          fontSize={"3xl"}
          textAlign={"center"}
          color={"red.400"}
          margin={8}
        >
          Find a service to review!
        </Text>
        <HStack spacing={4} align="center">
          <InputGroup size="lg" maxWidth="2xl">
            <InputLeftElement pointerEvents="none">
              <Icon 
                as={FaAt} 
                boxSize={4}
                color="gray.300" 
              />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Enter IG handle"
              _focus={{
                outline: "none",
                boxShadow: "outline",
              }}
            />
            <Link as={RouterLink} to="/searchresults">
            <IconButton
              background="pink.800"
              color="white"
              aria-label="Search"
              icon={<SearchIcon />}
            />
            </Link>
          </InputGroup>
        </HStack>
      </VStack>
    </Center>
  );
}

export default IGServiceSearch;
