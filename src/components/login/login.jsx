import React, { useState, useRef } from 'react';
import axios from 'axios';
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";


  export default function LoginForm(props) {
    const [loginDetails, setState] = useState({email:"", password:""});
    let handleLoginDetails = (value, inputName) => {
         
         loginDetails[inputName] =value;
         setState(loginDetails);
         //console.log(value);

    }

    let submitLoginDetails = async () => {
        let result = await axios.post('https://traveljunkie.dev/api/users/signin', loginDetails);
        if(result.status === 200) {

        } else {
             
        }
    }

    return (
        <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type={"email"} placeholder="email" onBlur={(event) => {
                   handleLoginDetails(event.target.value, "email")
              }}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type={"password"} placeholder="Last name" onBlur={(event) => {
                   handleLoginDetails(event.target.value, "password")
              }}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={submitLoginDetails}>
              Log In
            </Button>
            <Button onClick={props.onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }