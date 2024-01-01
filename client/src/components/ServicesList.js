import React from "react";
import Hair from "../assets/hair_icon.png";
import Skincare from "../assets/skincare_icon.png";
import Lashes from "../assets/lashes_icon.png";
import Nails from "../assets/nails_icon.png";
import Waxing from "../assets/waxing_icon.png";
import {
  SimpleGrid,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ServicesList() {
  return (
    <div className="services_list">
      <Text fontSize={"4xl"} m={10} align={"center"} color="pink.800">
        Services
      </Text>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md" _hover={{ bg: "red.400" }}>
            <LinkOverlay href="#">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image src={Hair} alt="Hair icon" />
                <span style={{ marginTop: "10px" }}>hair</span>
              </div>
            </LinkOverlay>
        </LinkBox>
        <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md" _hover={{ bg: "red.400" }}>
            <LinkOverlay href="#">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image src={Nails} alt="Dan Abramov" />
                <span style={{ marginTop: "10px" }}>nails</span>
              </div>
            </LinkOverlay>
        </LinkBox>
     
        <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md" _hover={{ bg: "red.400" }}>
            <LinkOverlay href="#">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image src={Skincare} alt="Dan Abramov" />
                <span style={{ marginTop: "10px" }}>skincare</span>
              </div>
            </LinkOverlay>
        </LinkBox>
        <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md" _hover={{ bg: "red.400" }}>
            <LinkOverlay href="#">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image src={Lashes} alt="Dan Abramov" />
                <span style={{ marginTop: "10px" }}>lashes</span>
              </div>
            </LinkOverlay>
        </LinkBox>
        <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md" _hover={{ bg: "red.400" }}>
            <LinkOverlay href="#">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image src={Waxing} alt="Dan Abramov" />
                <span style={{ marginTop: "10px" }}>waxing</span>
              </div>
            </LinkOverlay>
        </LinkBox>
      </SimpleGrid>
    </div>
  );
}

export default ServicesList;
