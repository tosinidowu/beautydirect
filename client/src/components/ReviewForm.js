import {React, useState} from "react";
import { Textarea } from '@chakra-ui/react';
import { Stack,
        Text,
        Button,
        Flex,
        useColorModeValue,
        FormControl,
        VStack,
        HStack,
        Input,
        Box,
 } from "@chakra-ui/react";
import StarRating from "../components/StarRating";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ImageUpload from '../components/ImageUpload'; 

const ReviewForm = () => {

    const [rating, setRating] = useState(0);
    const theme = createTheme();

    return (
        <VStack 
            spacing={8} 
            mx={"auto"} 
            maxW={"80ch"} 
            py={12} 
            px={6}>
        <Stack align={'center'}>
          <Text  fontSize={'4xl'} color={'black'}>[Service Provider]</Text>
        </Stack>

        <Box
            width="50%"
        >
            <Text>Service Received:</Text>
            <Input
                type="text"
                id="serviceProvided"
                //value={formData.serviceProvided}
                //onChange={handleChange}
            />

            <Text>Service Location (City):</Text>
            <Input
                type="text"
                id="serviceLocation"
                //value={formData.serviceProvided}
                //onChange={handleChange}
            />
       
            <Text>Service Cost:</Text>
            <Input
                type="text"
                id="serviceCost"
                //value={formData.serviceProvided}
                //onChange={handleChange}
            />

            <ThemeProvider theme={theme}>
            <Text>Service Rating:</Text>
            <StarRating 
                rating={rating} 
                setRating={setRating}
            />
            </ThemeProvider>
        </Box>
        
        <Textarea 
            placeholder="Leave a review here!"
            size="md"
            resize="vertical"
            focusBorderColor="pink.800"
            h="150px"
            borderColor="solid #ccc"

        />
        <Stack align={'center'}>
          <Text  fontSize={'4xl'} color={'black'}>Attach Photos</Text>
          <ImageUpload />
        </Stack>
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