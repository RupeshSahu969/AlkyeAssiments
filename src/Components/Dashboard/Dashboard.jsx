import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import elipse1 from "../assets/Ellipse 5.png";
import elipse2 from "../assets/Ellipse 6.png";
import lock from "../assets/Rectangle 32.png";
import lock2 from "../assets/Rectangle 33.png";
import man from "../assets/Rectangle 34.png";
import lock3 from "../assets/Rectangle 39.png";
import logo1 from "../assets/Logo_white.png";
import Footer from "../../Pages/Footer";

const images = [lock, lock2, man, lock3];
const slideInterval = 2000;

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, slideInterval);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <Box
      minH="100vh"
      overflowY="auto"
      mb={{ base: "300px", md: "10px" }}
      bgColor={"black"}
      color={"white"}
    >
      <Flex
        w={{ base: "100%", md: "90%" }}
        h={{ base: "100vh", md: "100%" }}
        m="auto"
        mt={"30px"}
        flexDirection="column"
        alignItems="center"
        p={{ base: "0rem", md: "20px" }}
        borderRadius={{ base: "50px", md: "10px" }}
        mb={"10px"}
        overflow={"hidden"}
      >
        <Box
          w={{ base: "100%", md: "100%" }}
          mb="20px"
          marginLeft={{ base: "3rem", md: "3%" }}
        >
          <Image src={logo1} boxSize="100px" objectFit="contain" />
        </Box>

        <Box
          fontSize={{ base: "24px", md: "48px" }}
          marginLeft={{ base: "-13rem", md: "-62rem" }}
        >
          <Text textAlign={"start"}>Welcome Test</Text>
        </Box>
        <Box
          fontSize={{ base: "12px", md: "24px" }}
          marginLeft={{ base: "-11rem", md: "-58rem" }}
        >
          <Text textAlign={"start"}>Hope you are having a good day!</Text>
        </Box>

        {/* First Slider */}
        <Box
          w={{ base: "100%", md: "100%" }}
          mt={{ base: "5rem", md: "1rem" }}
          h={{ base: "230px", md: "500px" }}
          ml={{ base: "4rem", md: "2rem" }}
          mb={{ base: "0rem", md: "15rem" }}
        >
          <Box
            fontSize={{ base: "24px", md: "48px" }}
            mb="20px"
            textAlign={{ base: "center", md: "left" }}
            display={{ base: "none", md: "flex" }}
          >
            <Text>Photography</Text>
          </Box>
          <Flex
            width="100%"
            height="100%"
            overflow="hidden"
            position="relative"
            justifyContent="center"
          >
            <Flex
              width={`${images.length * 300}px`}
              transform={`translateX(-${currentIndex * 300}px)`}
              transition="transform 0.5s ease-in-out"
            >
              {images.map((image, index) => (
                <Box
                  key={index}
                  flexShrink="0"
                  width={{ base: "212px", md: "350px" }}
                  height="100%"
                  paddingRight="1rem"
                >
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />
                </Box>
              ))}
            </Flex>
          </Flex>
          <Flex
            w={{ base: "80%", md: "10%" }}
            gap={1}
            mt={{ base: "2rem", md: "2rem" }}
            ml={{ base: "10.5rem", md: "90%" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Image
                src={elipse1}
                boxSize={{ base: "15px", md: "30px" }}
                objectFit="contain"
              />
            </Box>
            <Box>
              <Image
                src={elipse2}
                boxSize={{ base: "15px", md: "30px" }}
                objectFit="contain"
              />
            </Box>
            <Box>
              <Image
                src={elipse2}
                boxSize={{ base: "15px", md: "30px" }}
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Box>

        {/* Second Slider */}
        <Box
          w={{ base: "100%", md: "100%" }}
          mt={{ base: "5rem", md: "1rem" }}
          h={{ base: "230px", md: "500px" }}
          ml={{ base: "3rem", md: "3rem" }}
          mb={{ base: "0rem", md: "15rem" }}
        >
          <Box
            fontSize={{ base: "24px", md: "48px" }}
            mb="20px"
            textAlign={{ base: "center", md: "left" }}
            display={{ base: "none", md: "flex" }}
          >
            <Text>Learning</Text>
          </Box>
          <Flex
            width="100%"
            height="100%"
            overflow="hidden"
            position="relative"
            justifyContent="center"
          >
            <Flex
              width={`${images.length * 300}px`}
              transform={`translateX(-${currentIndex * 300}px)`}
              transition="transform 0.5s ease-in-out"
            >
              {images.map((image, index) => (
                <Box
                  key={index}
                  flexShrink="0"
                  width={{ base: "212px", md: "350px" }}
                  height="100%"
                  paddingRight="1rem"
                >
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />
                </Box>
              ))}
            </Flex>
          </Flex>
          <Flex
            w={{ base: "80%", md: "10%" }}
            gap={1}
            mt={{ base: "2rem", md: "2rem" }}
            ml={{ base: "11rem", md: "90%" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Image
                src={elipse1}
                boxSize={{ base: "15px", md: "30px" }}
                objectFit="contain"
              />
            </Box>
            <Box>
              <Image
                src={elipse2}
                boxSize={{ base: "15px", md: "30px" }}
                objectFit="contain"
              />
            </Box>
            <Box>
              <Image
                src={elipse2}
                boxSize={{ base: "15px", md: "30px" }}
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Dashboard;
