import { Box, Text, Image, VStack, HStack, Link, Button, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={6} align="center">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          Visit Us at Grove Street Pub & Grill
        </Text>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/grove-street-pub--grill/exterior" 
          alt="Grove Street Pub & Grill Exterior" 
          width="100%" 
          maxW="800px" 
          height="auto" 
          borderRadius="md"
        />

        <Text fontSize="lg" textAlign="center" maxW="800px">
          Grove Street Pub & Grill is "Your Neighborhood Place." We offer a warm and welcoming atmosphere with craft beer, wine, cocktails, and delicious American fare like burgers and cheesesteaks.
        </Text>

        <Divider />

        <VStack spacing={4} align="center">
          <Text fontSize="2xl" fontWeight="bold">Location</Text>
          <Text fontSize="lg">1092 Howertown Rd, Catasauqua, PA 18032, USA</Text>
          <Box width="100%" maxW="800px">
            <iframe
              title="Grove Street Pub & Grill Location"
              width="100%"
              height="400px"
              style={{ border: 0, borderRadius: "8px" }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=Grove+Street+Pub+%26+Grill,Catasauqua,PA`}
            ></iframe>
          </Box>
        </VStack>

        <Divider />

        <VStack spacing={4} align="center">
          <Text fontSize="2xl" fontWeight="bold">Hours</Text>
          <Text fontSize="lg">Monday - Thursday: 11:00 AM - 10:00 PM</Text>
          <Text fontSize="lg">Friday - Saturday: 11:00 AM - 12:00 AM</Text>
          <Text fontSize="lg">Sunday: 11:00 AM - 9:00 PM</Text>
        </VStack>

        <Divider />

        <VStack spacing={4} align="center">
          <Text fontSize="2xl" fontWeight="bold">Contact</Text>
          <Text fontSize="lg">Phone: (610) 477-3305</Text>
          <Link href="https://www.facebook.com/grovestreetpub" isExternal color="blue.500" fontSize="lg">
            Facebook Page
          </Link>
        </VStack>

        <Divider />

        <HStack spacing={4} wrap="wrap" justify="center">
          <Button as={RouterLink} to="/" colorScheme="blue" size="lg">
            Home
          </Button>
          <Button as={RouterLink} to="/menu" colorScheme="blue" size="lg">
            View Menu
          </Button>
          <Button as={RouterLink} to="/contact" colorScheme="blue" size="lg">
            Contact Us
          </Button>
        </HStack>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/grove-street-pub--grill/inside" 
          alt="Inside Grove Street Pub & Grill" 
          width="100%" 
          maxW="800px" 
          height="auto" 
          borderRadius="md"
        />
      </VStack>
    </Box>
  );
};

export default Visit;