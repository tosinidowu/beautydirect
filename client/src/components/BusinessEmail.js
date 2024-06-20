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

const BusinessEmail = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.md" mt={10}>
        <Flex direction={{ base: 'column', md: 'row' }} align="center">
          <Box flex={1}>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              Enter your business email address
            </Text>
            <Text fontSize="md" mb={6}>
              Enter your business email address to get started. Important messages and updates will be sent to this address.
            </Text>
            <Flex align="center" maxW="md" mb={4}>
              <Input
                placeholder="Business Email address"
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

export default BusinessEmail;
