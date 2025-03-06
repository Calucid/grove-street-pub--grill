import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Text, Textarea, Link, IconButton, VStack, HStack, Image } from "@chakra-ui/react";
import { FaFacebook, FaEnvelope } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Contact = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Text fontSize="3xl" fontWeight="bold">Contact Us</Text>
          <Text fontSize="lg" color="gray.600">We’d love to hear from you!</Text>
        </Box>

        <Box>
          <Image 
            src="http://stock.calucid.com/fetch/calucid/grove-street-pub--grill/location" 
            alt="Grove Street Pub & Grill Location" 
            width="100%" 
            height="300px" 
            objectFit="cover" 
            borderRadius="md"
          />
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="bold">Our Location</Text>
          <Text>Grove Street Pub & Grill</Text>
          <Text>1092 Howertown Rd, Catasauqua, PA 18032, USA</Text>
          <Text>Phone: <Link href="tel:+16104773305" color="teal.500">(610) 477-3305</Link></Text>
          <Text>Email: <Link href="mailto:contact@grovestreetpub.com" color="teal.500">contact@grovestreetpub.com</Link></Text>
        </Box>

        <HStack spacing={4}>
          <Link href="https://www.facebook.com/grovestreetpub" isExternal>
            <IconButton icon={<FaFacebook />} aria-label="Facebook" size="lg" colorScheme="facebook" />
          </Link>
          <Link href="mailto:contact@grovestreetpub.com">
            <IconButton icon={<FaEnvelope />} aria-label="Email" size="lg" colorScheme="teal" />
          </Link>
        </HStack>

        <Box>
          <Text fontSize="xl" fontWeight="bold">Send Us a Message</Text>
          <Stack spacing={4} mt={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your Email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>
            <Button colorScheme="teal" size="lg">Submit</Button>
          </Stack>
        </Box>

        <HStack justify="center" spacing={6} mt={6}>
          <Link as={RouterLink} to="/" color="teal.500">Home</Link>
          <Link as={RouterLink} to="/about" color="teal.500">About</Link>
          <Link as={RouterLink} to="/menu" color="teal.500">Menu</Link>
          <Link as={RouterLink} to="/visit" color="teal.500">Visit</Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Contact;