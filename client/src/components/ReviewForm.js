import React from "react";
import { Textarea } from '@chakra-ui/react';
import { Stack,
        Text,
        Button,
        Flex,
        useColorModeValue,
        FormControl,
        VStack
 } from "@chakra-ui/react";


const ReviewForm = () => {
    return (
        <VStack 
            spacing={8} 
            mx={"auto"} 
            maxW={"80ch"} 
            py={12} 
            px={6}>
        <Stack align={'center'}>
          <Text  fontSize={'4xl'} color={'black'}>Leave a Review</Text>
        </Stack>

        <Text>Service Provider:</Text>
        <Text>Service Name:</Text>
        <Text>Service Date:</Text>
        <Text>Service Location:</Text>
        <Text>Service Cost:</Text>
        <Text>Service Rating:</Text>
        <Text>Photos</Text>
        
        <Textarea 
            placeholder="Leave a review here!"
            size="md"
            resize="vertical"
            focusBorderColor="pink.800"
            h="150px"
        />
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
                Submit
            </Button>
        </Stack>
        </VStack>
    );
};

export default ReviewForm;