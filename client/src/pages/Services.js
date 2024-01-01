import React from "react";
import Header from "../components/Header";
import ServicesList from "../components/ServicesList";
import {Box, Container} from '@chakra-ui/react';

function Services(){
    return(
        <div className="services">
            <Header />
            <Container maxW="container.lg" h="100vh" justifyContent="center" alignItems="center">
                <Box m={10}><ServicesList /></Box>
            </Container>
        </div>
    );
};

export default Services;