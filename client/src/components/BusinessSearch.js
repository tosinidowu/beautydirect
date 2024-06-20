// Import necessary components from Chakra UI
import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Input,
  Flex,
  Container,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const BusinessSearch = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.md" mt={10}>
        <Flex direction={{ base: 'column', md: 'row' }} align="center">
          <Box flex={1}>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              Hello! Let’s start with your business name
            </Text>
            <Text fontSize="md" mb={6}>
              Search for your business. If you can’t find it, you can add your business name so that we can help you claim your Yelp Page.
            </Text>
            <Flex align="center" maxW="md" mb={4}>
              <Input
                placeholder="e.g. Mario’s Plumber"
                size="lg"
                borderRadius="md"
              />
              <SearchIcon boxSize={6} ml={2} />
            </Flex>
          </Box>
          <Box display={{ base: 'none', md: 'block' }} ml={10}>
            <img
              src="https://via.placeholder.com/200"
              alt="Business Illustration"
              width="200"
            />
          </Box>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default BusinessSearch;
