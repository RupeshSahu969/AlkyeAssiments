import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import facebook from "./assets/facebook.png";
import instra from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import youtube from "./assets/youtube.png";
import twitch from "./assets/twitch.png";

const Footer = () => {
  return (
    <Box>
       <Flex
        w={{ base: "10%", md: "70%" }}
        h={{ base: "100%", md: "50%" }}
        m="auto"
        mt="30px"
        flexDirection="column"
        alignItems="center"
        p="20px"
        borderRadius="10px"
        border="3px solid red"
        bg="black" // Background color black
        color="white" // Text color white
      >
        <Flex w="80%" mb="20px">
          <Box>
            <Image src={facebook} w="50px" h="50px" objectFit="contain" />
          </Box>
          <Box>
            <Image src={instra} w="50px" h="50px" objectFit="contain" />
          </Box>
          <Box>
            <Image src={twitter} w="50px" h="50px" objectFit="contain" />
          </Box>
          <Box>
            <Image src={twitch} w="50px" h="50px" objectFit="contain" />
          </Box>
          <Box>
            <Image src={youtube} w="50px" h="50px" objectFit="contain" />
          </Box>
        </Flex>

        <SimpleGrid
          columns={[1, 1, 2, 4]}
          gap="40px"
          m="auto"
          w={{ base: "100%", md: "70%" }}
        >
          <Box>
            <Text>Privacy Policy</Text>
          </Box>
          <Box>
            <Text>Contact Us</Text>
          </Box>
          <Box>
            <Text>Cookie Preferences</Text>
          </Box>
          <Box>
            <Text>Corporate Information</Text>
          </Box>
        </SimpleGrid>

        <SimpleGrid
          columns={[1, 1, 2, 4]}
          gap="40px"
          m="auto"
          ml={{ base: "30px", md: "25px" }}
        >
          <Box>
            <Text>Privacy Policy</Text>
          </Box>
          <Box>
            <Text>Contact Us</Text>
          </Box>
          <Box>
            <Text>Cookie Preferences</Text>
          </Box>
          <Box>
            <Text>Corporate Information</Text>
          </Box>
        </SimpleGrid>
      </Flex>
      <Text fontSize="sm">© Alkye Test.</Text>
    </Box>
  )
}

export default Footer
