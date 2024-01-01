import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../assets/AdobeStock_569533454.jpeg";

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

const ServiceSearch = ({page, setPage}) =>{
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
            <InputLeftElement pointerEvents="none"></InputLeftElement>
            <Input
              type="text"
              placeholder="Service or company"
              _focus={{
                outline: "none",
                boxShadow: "outline",
              }}
            />
            <Input
              type="text"
              placeholder="Location"
              _focus={{
                outline: "none",
                boxShadow: "outline",
              }}
            />
            <IconButton
              background="pink.800"
              color="white"
              aria-label="Search"
              icon={<SearchIcon />}
            />
          </InputGroup>
        </HStack>
        
        <Link 
            as={RouterLink} to="#" 
            margin={8} 
            color={"blue.400"}
            onClick={() => {
            setPage(page+1)
        }}>
          Search with IG handle
        </Link>
        <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                Hero
              }
            />
          </Box>
      </VStack>
    </Center>
  );
}

export default ServiceSearch;
