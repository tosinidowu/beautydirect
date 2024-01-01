import { ReactNode } from "react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import bdLogo from "../assets/bd_navbar_logo.png";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  extendTheme,
  ChakraProvider,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useBreakpointValue,
  FormControl,
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Spacer,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  SearchIcon,
} from "@chakra-ui/icons";

const Links = ["Set up my business"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const customTheme = extendTheme({
  colors: {
    customButtonColor: "#751a46",
  },
});

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isSearchBarVisible = useBreakpointValue({ base: false, md: true });

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <ChakraProvider theme={customTheme}>
      <Box bg={useColorModeValue("white", "gray.900")} boxShadow={"xl"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={toggleDrawer}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link
              as={RouterLink}
              to="/"
              color={useColorModeValue("black", "white")}
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("pink.700", "pink.300"),
              }}
              whiteSpace="nowrap"
            >
              <Image src={bdLogo} alt="logo" boxSize="60px" />
            </Link>
            <Spacer />
            {isSearchBarVisible && (
              <InputGroup size="md" maxWidth="md">
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Search"
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
                <Button
                  colorScheme="red"
                  size="md"
                  variant="solid"
                  type="submit"
                  width="150px"
                >
                  Search
                </Button>
              </InputGroup>
            )}
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              as={RouterLink}
              to="/search"
              variant={"solid"}
              colorScheme={"customButtonColor"}
              bg={"red.400"}
              size={"md"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Write a Review
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={"https://bit.ly/broken-link"} />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link
                    as={RouterLink}
                    to="/login"
                    color={useColorModeValue("black", "white")}
                    _hover={{
                      textDecoration: "none",
                      color: useColorModeValue("blue.500", "blue.300"),
                    }}
                  >
                    Login
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    as={RouterLink}
                    to="/signup"
                    color={useColorModeValue("black", "white")}
                    _hover={{
                      textDecoration: "none",
                      color: useColorModeValue("blue.500", "blue.300"),
                    }}
                  >
                    Sign Up
                  </Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Link
                    as={RouterLink}
                    to="/"
                    color={useColorModeValue("black", "white")}
                    _hover={{
                      textDecoration: "none",
                      color: useColorModeValue("blue.500", "blue.300"),
                    }}
                  >
                    Set up my business
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    as={RouterLink}
                    to="/search"
                    color={useColorModeValue("black", "white")}
                    _hover={{
                      textDecoration: "none",
                      color: useColorModeValue("blue.500", "blue.300"),
                    }}
                  >
                    Write a review
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}

        <Drawer placement="left" onClose={toggleDrawer} isOpen={isDrawerOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <InputGroup size="sm" mb={4}>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" boxSize={5}/>
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Search"
                  _focus={{
                    outline: "none",
                    boxShadow: "outline",
                  }}
                  size="md"
                />
              </InputGroup>

              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </ChakraProvider>
  );
}
