import { React, useState, useEffect } from "react";
import { Textarea } from "@chakra-ui/react";
import {
    Stack,
    Text,
    Button,
    Flex,
    Input,
    Box,
    IconButton,
    VStack,
} from "@chakra-ui/react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import StarRating from "../components/StarRating";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";

const ReviewForm = () => {
    const [cost, setCost] = useState("");
    const [location, setLocation] = useState("");
    const [serviceProvided, setServiceProvided] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    const [selectedImage, setSelectedImage] = useState(null);
    const theme = createTheme();

    // handle cost change
    const handleCostChange = (event) => {
        setCost(event.target.value);
    };
    // handle location change
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };
    // handle service provided change
    const handleServiceProvidedChange = (event) => {
        setServiceProvided(event.target.value);
    };
    // handle description change
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    // Uploads image to cloudinary
    const uploadCloudinary = async (image) => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "ehwydlel");
        const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dbtib7tay/image/upload",
            formData
        );
        return response.data.secure_url;
    };
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        // Handle the uploaded image (e.g., display preview, send to server, etc.)
        setSelectedImage(file);
    };

    const handleDeleteImage = () => {
        setSelectedImage(null);
    };
    const handleSubmit = async () => {
        console.log(value);
        console.log(cost);
        console.log(location);
        console.log(serviceProvided);
        console.log(selectedImage);
        // check if everything is filled out
        if (
            !cost ||
            !location ||
            !serviceProvided ||
            !selectedImage ||
            !value
        ) {
            alert("Please fill out all fields");
            //Todo: add error message
            return;
        }
        if (!localStorage.getItem("id")) {
            alert("Please login to write a review");
            return;
        }
        // upload image to cloudinary
        const url = await uploadCloudinary(selectedImage);
        // send data to backend
        const data = {
            cost: cost,
            location: location,
            serviceReceived: serviceProvided,
            comment: description,
            imageUrl: url,
            rating: value,
        };
        const userId = localStorage.getItem("id");
        // get servicer id from url query
        const urlParams = new URLSearchParams(window.location.search);
        const servicerId = urlParams.get("id");
        axios
            .post(
                `http://localhost:5002/api/review/write/${servicerId}/${userId}`,
                data
            )
            .then((res) => {
                alert("Review submitted");
                window.location.href = "/";
            });
    };
    return (
        <VStack spacing={8} mx={"auto"} maxW={"80ch"} py={12} px={6}>
            <Stack align={"center"}>
                <Text fontSize={"4xl"} color={"black"}>
                    [Service Provider]
                </Text>
            </Stack>

            <Box width="50%">
                <Text>Service Received:</Text>
                <Input
                    type="text"
                    id="serviceProvided"
                    value={serviceProvided}
                    onChange={handleServiceProvidedChange}
                />

                <Text>Service Location (City):</Text>
                <Input
                    type="text"
                    id="serviceLocation"
                    value={location}
                    onChange={handleLocationChange}
                />

                <Text>Service Cost:</Text>
                <Input
                    type="number"
                    id="serviceCost"
                    value={cost}
                    onChange={handleCostChange}
                />

                <ThemeProvider theme={theme}>
                    <Text>Service Rating:</Text>
                    <Box
                        sx={{
                            width: 200,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={
                                <StarIcon
                                    style={{ opacity: 0.55 }}
                                    fontSize="inherit"
                                />
                            }
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>
                                {labels[hover !== -1 ? hover : value]}
                            </Box>
                        )}
                    </Box>
                </ThemeProvider>
            </Box>

            <Textarea
                placeholder="Leave a review here!"
                size="md"
                resize="vertical"
                focusBorderColor="pink.800"
                h="150px"
                borderColor="solid #ccc"
                value={description}
                onChange={handleDescriptionChange}
            />
            <Stack align={"center"}>
                <Text fontSize={"4xl"} color={"black"}>
                    Attach Photos
                </Text>
                <Box>
                    {/* Display the selected image */}
                    {selectedImage && (
                        <Box mb={4} position="relative">
                            <img
                                src={URL.createObjectURL(selectedImage)}
                                alt="Selected"
                            />
                            <IconButton
                                icon={<DeleteIcon />}
                                aria-label="Delete Image"
                                onClick={handleDeleteImage}
                                position="absolute"
                                top="0"
                                right="0"
                            />
                        </Box>
                    )}

                    {/* Input for uploading images */}
                    <label htmlFor="imageUpload">
                        <Flex
                            align="center"
                            justify="center"
                            position="relative"
                            width="750px"
                            height="150px"
                            border="1px solid #ccc"
                            borderRadius="md"
                            p={4}
                        >
                            <Input
                                type="file"
                                id="imageUpload"
                                display="none"
                                onChange={handleImageUpload}
                                position="absolute"
                                top="0"
                                left="0"
                                width="100%"
                                height="100%"
                                opacity="0"
                                cursor="pointer"
                            />
                            <Flex align="center">
                                <IconButton
                                    as="span"
                                    icon={<AddIcon />}
                                    aria-label="Upload Image"
                                    variant="outline"
                                    size="lg"
                                />
                                <Box ml={2}>Upload Photo</Box>
                            </Flex>
                        </Flex>
                    </label>
                </Box>
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
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Stack>
        </VStack>
    );
};
const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default ReviewForm;
