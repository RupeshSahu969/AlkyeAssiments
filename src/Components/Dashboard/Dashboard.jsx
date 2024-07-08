import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import lock from "../assets/Rectangle 32.png";
import lock2 from "../assets/Rectangle 33.png";
import man from "../assets/Rectangle 34.png";
import lock3 from "../assets/Rectangle 39.png";
import logo1 from "../assets/Logo1.png";



const Dashboard = () => {
  return (
    <Box
      mt="30px"
      minH="100vh"
      overflowY="auto"
      mb={{ base: "300px", md: "50px" }}
    >
      <Flex
        w={{ base: "360px", md: "90%" }}
        h={{ base: "550px", md: "100%" }}
        m="auto"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        flexDirection="column"
        alignItems="center"
        p={{ base: "0rem", md: "20px" }}
        borderRadius={{ base: "50px", md: "10px" }}
        mb={"10px"}
      >
        <Box
          w={{ base: "100%", md: "100%" }}
          mb={{ base: "20px", md: "20px" }}
          marginLeft={{ base: "5rem", md: "10%" }}
        >
          {/* Adjusted Box for better alignment */}
          <Image src={logo1} boxSize="100px" objectFit="contain" />
        </Box>
        <Box
          fontSize={{ base: "24px", md: "48px" }}
          marginLeft={{ base: "0rem", md: "-58rem" }}
        >
          <Text textAlign={"start"}>Welcom Test </Text>
        </Box>
        <Box
          fontSize={{ base: "12px", md: "24px" }}
          marginLeft={{ base: "0rem", md: "-55rem" }}
        >
          <Text textAlign={"start"}>Hope you having a good day! </Text>
        </Box>
        <Box
          border={"2px solid red"}
          w={{ base: "100%", md: "90%" }}
          mt={{ base: "0rem", md: "2rem" }}
          h={{ base: "0px", md: "100vh" }}
        >
          <Box
            fontSize={{ base: "0px", md: "48px" }}
            marginLeft={{ base: "0rem", md: "-59rem" }}
          >
            <Text>Photography</Text>
          </Box>
         
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
