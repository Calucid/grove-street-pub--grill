import { Box, Container, Heading, Text, Image, VStack, HStack, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="center" textAlign="center">
        <Heading as="h1" size="2xl">
          About Grove Street Pub & Grill
        </Heading>
        <Text fontSize="lg" maxW="800px">
          Grove Street Pub & Grill is your neighborhood place for craft beer, wine, and cocktails, paired with casual American fare like burgers and cheesesteaks. Whether you're here for a drink with friends or a hearty meal, we welcome you with great flavors and a warm atmosphere.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/grove-street-pub--grill/pub-interior"
          alt="Pub Interior"
          width="100%"
          maxW="800px"
          height="auto"
          borderRadius="md"
        />
      </VStack>

      <VStack spacing={8} align="center" mt={10}>
        <Heading as="h2" size="xl">
          Our Story
        </Heading>
        <Text fontSize="lg" maxW="800px">
          Located in the heart of Catasauqua, PA, Grove Street Pub & Grill was founded with a simple mission: to provide a cozy and welcoming spot for locals to enjoy quality food and drinks. Our team is dedicated to crafting delicious meals and serving up refreshing beverages, all in a friendly, inviting atmosphere.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/grove-street-pub--grill/chef-cooking"
          alt="Chef Cooking"
          width="100%"
          maxW="800px"
          height="auto"
          borderRadius="md"
        />
      </VStack>

      <VStack spacing={8} align="center" mt={10}>
        <Heading as="h2" size="xl">
          What We Offer
        </Heading>
        <HStack spacing={6} wrap="wrap" justify="center">
          <Box textAlign="center">
            <Image
              src="http://stock.calucid.com/fetch/calucid/grove-street-pub--grill/craft-beer"
              alt="Craft Beer"
              width="300px"
              height="200px"
              borderRadius="md"
            />
            <Text fontSize="lg" mt={2}>Craft Beer</Text>
          </Box>
          <Box textAlign="center">
            <Image
              src="http://stock.calucid.com/fetch/calucid/grove-street-pub--grill/burgers"
              alt="Burgers"
              width="300px"
              height="200px"
              borderRadius="md"
            />
            <Text fontSize="lg" mt={2}>Delicious Burgers</Text>
          </Box>
          <Box textAlign="center">
            <Image
              src="http://stock.calucid.com/fetch/calucid/grove-street-pub--grill/cocktails"
              alt="Cocktails"
              width="300px"
              height="200px"
              borderRadius="md"
            />
            <Text fontSize="lg" mt={2}>Signature Cocktails</Text>
          </Box>
        </HStack>
      </VStack>

      <VStack spacing={8} align="center" mt={10}>
        <Heading as="h2" size="xl">
          Visit Us
        </Heading>
        <Text fontSize="lg" maxW="800px">
          Come experience the best in local dining and drinks at Grove Street Pub & Grill. We’re located at:
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          1092 Howertown Rd, Catasauqua, PA 18032, USA
        </Text>
        <Text fontSize="lg">Phone: (610) 477-3305</Text>
        <Button as={RouterLink} to="/visit" colorScheme="teal" size="lg">
          Plan Your Visit
        </Button>
      </VStack>

      <VStack spacing={8} align="center" mt={10}>
        <Heading as="h2" size="xl">
          Follow Us
        </Heading>
        <Button as={Link} href="https://www.facebook.com/grovestreetpub" colorScheme="facebook" size="lg" isExternal>
          Facebook Page
        </Button>
      </VStack>
    </Container>
  );
};

export default About;