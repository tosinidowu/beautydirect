import React, { useState } from 'react';
import { Box, IconButton, Input, InputGroup, InputRightElement, Flex } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // Handle the uploaded image (e.g., display preview, send to server, etc.)
    setSelectedImage(file);
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
  };

  return (
    <Box>
      {/* Display the selected image */}
      {selectedImage && (
        <Box mb={4} position="relative">
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
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
  );
};

export default ImageUpload;
