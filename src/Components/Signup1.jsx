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
import logo1 from "./assets/Logo1.png";
import facebook from "./assets/facebook.png";
import instra from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import youtube from "./assets/youtube.png";
import twitch from "./assets/twitch.png";

const Signup1 = () => {
  return (
    <>
      <Flex
        w={{ base: "90%", md: "90%" }}
        h={{ base: "100%", md: "550px" }}
        mt={{ base: "50rem", md: "30px" }}
        m="auto"
        border={{base:"1px solid red"}}
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        flexDirection="column"
        alignItems="center"
        p={{ base: "0rem", md: "20px" }}
        borderRadius="10px"
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
          <Text fontSize={{base:"12px", md:"24px"}}
            textAlign={"start"}
           ml={{base:"-8.9rem",md:"-37.9rem"}} >
            Steps 1
          </Text>
        </Box>

        <Flex
          w="70%"
          flexDirection={["column", "row"]}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box textAlign={["start", "left"]}
           mb={["10px", "0"]} ml={{base:"-4rem",md:"-8.5rem"}}>
            <Text fontSize={{base:"24px", md:"48px"}} whiteSpace="nowrap" fontWeight={"bold"}>
              Enter Your Email <Text>address to continue</Text>
            </Text>
          </Box>
          <Box
            flexBasis={["100%", "50%"]}
            display={{ base: "none", md: "flex" }}
            justifyContent={["center", "flex-start"]}
            marginTop="-5%"
          >
            <Input
              display={{ base: "none", md: "flex" }}
              type="email"
              placeholder="Email"
              htmlSize={60}
              height="60px"
              border={"1px solid gray"}
            />
          </Box>
          
        </Flex>

        <Flex
          w="90%"
          flexDirection={["column", "row"]}
          alignItems="center"
          justifyContent="space-between"
         
        >
          <Box  mt={{base:"-0.5rem", md:"1rem"}}
          >
            <Text fontSize={{base:"12px", md:"24px"}} ml={{base:"-4.8rem", md:"0rem"}}>
              Log in to your account. If you don’t have{" "}
              <Text>one, you will be prompted to create one.</Text>
            </Text>
          </Box>
          <Box  marginTop={{base:"0rem", md:"-9rem"}}
        display={{base:"none",md:"flex"}}
         >
            <Button
              bgColor="black"
              color="white"
              size="md"
              height="40px"
              width="100px"
              marginLeft={{base:"0rem", md:"-14.6rem"}}
            >
              Continue
            </Button>
          </Box>
        </Flex>
      
      </Flex>
    </>
  );
};

export default Signup1;
