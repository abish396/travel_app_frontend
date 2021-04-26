/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Link } from "react-router-dom";
import { Box, Image, SimpleGrid, Heading, Text, Button, ButtonGroup, useDisclosure } from "@chakra-ui/react";
import  LoginForm  from "../login/login";
export default function Example() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <SimpleGrid minChildWidth="120px" spacing="0px">
      <Box style={{ marginTop: "30%" }}>
        <Heading as="h2" size="3xl" fontWeight="extrabold">Best Treks, Expeditions, Adventures</Heading>
        <Heading as="h2" size="3xl" fontWeight="extrabold">just one click away</Heading>
        <Text className="mt-5" fontSize="xl">We help you find best trekking, adventure providing companies</Text>
        <ButtonGroup className="mt-5" spacing="6">
          <Button colorScheme="green" variant="solid" onClick={onOpen}>
              Log In
          </Button>
          <Button colorScheme="green" variant="solid">
              Sign Up
          </Button>
        </ButtonGroup>

      </Box>
      <Box  w="100%">
        <Image style={{height:"1000px", width:"100%"}} src={"https://image.freepik.com/free-vector/hiking-abstract-concept-vector-illustration-active-lifestyle-mountain-climbing-outdoor-camping-trekking-trail-countryside-walking-travel-adventure-extreme-tourism-trip-abstract-metaphor_335657-4261.jpg"} />
      </Box>
      <LoginForm isOpen={isOpen} onClose={onClose}></LoginForm>
    </SimpleGrid>
  )
}
