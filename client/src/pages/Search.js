import React, { useState } from "react";
import Header from "../components/Header";
import ServiceSearch from "../components/ServiceSearch";
import IGServiceSearch from "../components/IGServicesSearch";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function Search() {
    const [page, setPage] = useState(0);
    
    const components = [
        <ServiceSearch 
            page={page}
            setPage={setPage}
        />, 
        <IGServiceSearch 
            page={page}
            setPage={setPage}
        />
];

  return (
    <div className="search">
        <Header />
      <div className="search_pages">
        <IGServiceSearch />
      </div>
    </div>
  );
}

export default Search;
