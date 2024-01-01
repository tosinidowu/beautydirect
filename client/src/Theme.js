import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#FF0000',
    secondary: '#00FF00',
    // Add more custom colors here
  },
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif',
    // Add more custom fonts here
  },
  // Add more theme configurations here
});

export default theme;
