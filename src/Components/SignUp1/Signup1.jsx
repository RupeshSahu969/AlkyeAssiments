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
import logo1 from "../assets/Logo1.png";
import Footer from "../../Pages/Footer";
import { useNavigate } from "react-router-dom";

const Signup1 = () => {
  const [username, setUserName] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (username === "testadmin") {
      navigate("/signup2", { state: { username } });
    } else {
      alert("Please enter a valid username.");
    }
  };

  return (
    <Box mt="30px" minH="100vh" overflowY="auto" mb={{base:"300px" ,md:"50px"}}>
      <Flex
        w={{ base: "360px", md: "90%" }}
        h={{ base: "550px", md: "550px" }}
        // mt={{ base: "41px", md: "30px" }}
        m="auto"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        flexDirection="column"
        alignItems="center"
        p={{ base: "0rem", md: "20px" }}
        borderRadius={{base:"50px", md:"10px"}}
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
            ml={{ base: "-8.9rem", md: "-37.9rem" }}
          >
            Steps 1
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
              fontSize={{ base: "24px", md: "48px" }}
              whiteSpace="nowrap"
              fontWeight={"bold"}
            >
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
              onChange={(e) => setUserName(e.target.value)}
            />
          </Box>
        </Flex>

        <Flex
          w="90%"
          flexDirection={["column", "row"]}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box mt={{ base: "-0.5rem", md: "1rem" }}>
            <Text
              fontSize={{ base: "12px", md: "24px" }}
              ml={{ base: "-4.8rem", md: "0rem" }}
            >
              Log in to your account. If you don’t have{" "}
              <Text>one, you will be prompted to create one.</Text>
            </Text>
          </Box>
          <Box
            marginTop={{ base: "0rem", md: "-9rem" }}
            display={{ base: "none", md: "flex" }}
          >
            <Button
              bgColor="black"
              color="white"
              size="md"
              height="40px"
              width="100px"
              marginLeft={{ base: "0rem", md: "-14.6rem" }}
              onClick={handleContinue}
            >
              Continue
            </Button>
          </Box>
        </Flex>
        <Box display={{ base: "flex", md: "none" }}>
          <Box
            display={{ base: "flex", md: "none" }}
            justifyContent={["center", "flex-start"]}
            marginTop={"50px"}
          >
            <Input
              display={{ base: "flex", md: "none" }}
              type="text"
              placeholder="Email"
              htmlSize={30}
              height="50px"
              border={"1px solid gray"}
              onChange={(e) => setUserName(e.target.value)}
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
              onClick={handleContinue}
            >
              Continue
            </Button>
          </Box>
        </Flex>
      </Flex>
      <Footer/>
    </Box>
  );
};

export default Signup1;
