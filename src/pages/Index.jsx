import React from "react";
import { Container, VStack, Text, Heading, Box } from "@chakra-ui/react";
import { FaWrench } from "react-icons/fa";
import ReactPlayer from "react-player";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box display="flex" alignItems="center">
          <FaWrench size="2em" />
          <Heading as="h1" size="xl" ml={2}>
            Car Repair Tutorial
          </Heading>
        </Box>
        <Text fontSize="lg">Learn how to repair your car with our step-by-step video guide.</Text>
        <Box width="100%" maxW="720px" borderRadius="md" overflow="hidden" boxShadow="md">
          <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" width="100%" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
