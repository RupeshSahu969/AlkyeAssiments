import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import logo1 from "./assets/Logo1.png";
import eys from "./assets/eye-off.png"

import Footer from "../Pages/Footer";

const Signup2 = () => {

  const [showPassword, setShowPassword] = useState(false);

  const showsPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      mt="30px"
      minH="100vh"
      overflowY="auto"
      mb={{ base: "300px", md: "50px" }}
    >
      <Flex
        w={{ base: "360px", md: "90%" }}
        h={{ base: "550px", md: "550px" }}
        // mt={{ base: "41px", md: "30px" }}
        m="auto"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        flexDirection="column"
        alignItems="center"
        p={{ base: "0rem", md: "20px" }}
        borderRadius={{ base: "50px", md: "10px" }}
      >
        <Box
          w={{ base: "100%", md: "100%" }}
          mb={{ base: "20px", md: "20px" }}
          marginLeft={{ base: "5rem", md: "10%" }}
        >
          {/* Adjusted Box for better alignment */}
          <Image src={logo1} boxSize="100px" objectFit="contain" />
        </Box>

        <Box>
          <Text
            fontSize={{ base: "12px", md: "24px" }}
            textAlign={"start"}
            ml={{ base: "-8.9rem", md: "-37.5rem" }}
          >
            Steps 2
          </Text>
        </Box>

        <Flex
          w="70%"
          flexDirection={["column", "row"]}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            textAlign={["start", "left"]}
            mb={["10px", "0"]}
            ml={{ base: "-4rem", md: "-8.5rem" }}
          >
            <Text
              fontSize={{ base: "24px", md: "40px" }}
              whiteSpace="nowrap"
              fontWeight={"bold"}
            >
              Create an account to <Text> continue</Text>
            </Text>
          </Box>
          <Box display={{ base: "none", md: "flex" }}
           w="1500px" mt={"-50px"}  ml="15%" fontWeight={"bold"} 
           >
            {" "}
            <Text fontSize={{ base: "0", md: "14px" }}>
              Enter a password to create your account with 
            </Text>{" "}
          </Box>
          
          <Input
              type={showPassword ? "text" : "password"}
              placeholder="Choose a Password"
              height="60px"
              border="1px solid gray"
              ml="-820px"
              mt="50px"
              pr="40px" 
              display={{ base: "none", md: "flex" }}
            />
            <Image
             src={eys}
             position="absolute"
             right="350px"
             top="35.5%"
             transform="translateY(-50%)"
             cursor="pointer"
             onClick={showsPassword}
             boxSize="20px"
             display={{ base: "none", md: "flex" }}
            />
        </Flex>

        <Flex
          w="90%"
          flexDirection={["column", "row"]}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box mt={{ base: "-0rem", md: "1rem" }}>
            <Text
              // fontSize={{ base: "12px", md: "20px" }}
              ml={{ base: "-0.2rem", md: "0rem" }}
              textAlign={"start"}
            >
              You’ll be able to log in to Dingoo with this{" "}
              <Text>email address and password.have.</Text>
            </Text>
          </Box>
          <Box display={{ base: "none", md: "flex" }} ml="-110px">
            <Text>
              Use a minimum of 6 characters (case sensitive)
              <span style={{ display: "block", marginLeft: "0px" }}>
                with at least one number or special character.
              </span>
            </Text>
          </Box>
          <Box
            marginTop={{ base: "0rem", md: "-1rem" }}
            display={{ base: "none", md: "flex" }}
          >
            
            <Button
              bgColor="black"
              color="white"
              size="sm"
              height="40px"
              width="140px"
              marginLeft={{ base: "0rem", md: "-17rem" }}
            >
              Agree & Continue
            </Button>
          </Box>
        </Flex>

        <Box w="80%" marginLeft={"-130px"} mt="40px">
          <Text textAlign={"start"} fontSize={"13px"}   display={{ base: "none", md: "flex" }}>
          Dingoo will use your data to personalise and improve your Dingoo experience and to send you information about Dingoo. You can change your communication preferences anytime. We may use your data as described in our Privacy Policy, including sharing it with The Test of Companies. By clicking "Agree & Continue", you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy and Collection Statement.
          </Text>
       </Box>
        <Box display={{ base: "flex", md: "none" }}>
          <Box
            display={{ base: "flex", md: "none" }}
            justifyContent={["center", "flex-start"]}
            marginTop={"50px"}
          >
            <Input
              display={{ base: "flex", md: "none" }}
              type="password"
              placeholder="Password"
              htmlSize={30}
              height="50px"
              border={"1px solid gray"}
            />
          </Box>
        </Box>
        <Flex
          display={{ base: "flex", md: "none" }}
          justifyContent="center"
          alignItems="center"
          gap="4rem"
          mt={"30px"}
        >
          <Box>
            <Text>Have an account?</Text>
          </Box>
          <Box>
            <Button
              bgColor="black"
              color="white"
              size="md"
              height="40px"
              width="100px"
            >
              Agree & Continue
            </Button>
          </Box>
        </Flex>
      </Flex>
      {/* <Footer/> */}
    </Box>
  );
};
export default Signup2;
