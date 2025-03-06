import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box position="relative" w="100%" h={{ base: "400px", md: "600px" }}>
        <Image
          src="http://stock.calucid.com/fetch/calucid/grove-street-pub--grill/bar-interior"
          alt="Grove Street Pub & Grill Interior"
          objectFit="cover"
          w="100%"
          h="100%"
        />
        <Box position="absolute" top="0" left="0" w="100%" h="100%" bg="blackAlpha.600" display="flex" alignItems="center" justifyContent="center">
          <Stack textAlign="center" spacing={4} color="white">
            <Heading fontSize={{ base: "3xl", md: "5xl" }}>Grove Street Pub & Grill</Heading>
            <Text fontSize={{ base: "md", md: "xl" }}>"Your Neighborhood Place"</Text>
            <Button as={RouterLink} to="/menu" colorScheme="orange" size="lg">
              View Menu
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* About Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" p={8} gap={8}>
        <Image
          src="http://stock.calucid.com/fetch/calucid/grove-street-pub--grill/burger-and-beer"
          alt="Burger and Beer"
          w={{ base: "100%", md: "50%" }}
          h="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <Box flex="1">
          <Heading size="xl" mb={4}>Welcome to Grove Street Pub & Grill</Heading>
          <Text fontSize="lg" mb={4}>
            A neighborhood pub offering craft beer, wine, and cocktails along with casual American fare like burgers and cheesesteaks.
          </Text>
          <Button as={RouterLink} to="/about" colorScheme="orange">
            Learn More
          </Button>
        </Box>
      </Flex>

      {/* Featured Menu Items */}
      <Box bg="gray.100" py={12}>
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={8}>Featured Menu Items</Heading>
          <Flex direction={{ base: "column", md: "row" }} gap={6} justify="center">
            <Box textAlign="center">
              <Image
                src="http://stock.calucid.com/fetch/calucid/grove-street-pub--grill/cheesesteak"
                alt="Cheesesteak"
                w="300px"
                h="200px"
                objectFit="cover"
                borderRadius="md"
                mx="auto"
              />
              <Text fontSize="lg" mt={4}>Philly Cheesesteak</Text>
            </Box>
            <Box textAlign="center">
              <Image
                src="http://stock.calucid.com/fetch/calucid/grove-street-pub--grill/craft-beer"
                alt="Craft Beer"
                w="300px"
                h="200px"
                objectFit="cover"
                borderRadius="md"
                mx="auto"
              />
              <Text fontSize="lg" mt={4}>Craft Beer Selection</Text>
            </Box>
            <Box textAlign="center">
              <Image
                src="http://stock.calucid.com/fetch/calucid/grove-street-pub--grill/cocktail"
                alt="Cocktail"
                w="300px"
                h="200px"
                objectFit="cover"
                borderRadius="md"
                mx="auto"
              />
              <Text fontSize="lg" mt={4}>Signature Cocktails</Text>
            </Box>
          </Flex>
          <Flex justify="center" mt={6}>
            <Button as={RouterLink} to="/menu" colorScheme="orange">
              View Full Menu
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Visit Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" p={8} gap={8}>
        <Box flex="1">
          <Heading size="xl" mb={4}>Visit Us</Heading>
          <Text fontSize="lg" mb={4}>
            1092 Howertown Rd, Catasauqua, PA 18032, USA
          </Text>
          <Text fontSize="lg" mb={4}>
            Call us: <Link href="tel:+16104773305" color="orange.500">(610) 477-3305</Link>
          </Text>
          <Button as={RouterLink} to="/visit" colorScheme="orange">
            Get Directions
          </Button>
        </Box>
        <Image
          src="http://stock.calucid.com/fetch/calucid/grove-street-pub--grill/pub-exterior"
          alt="Pub Exterior"
          w={{ base: "100%", md: "50%" }}
          h="300px"
          objectFit="cover"
          borderRadius="md"
        />
      </Flex>

      {/* Social Media */}
      <Box textAlign="center" py={8}>
        <Heading size="lg" mb={4}>Follow Us</Heading>
        <Button as={Link} href="https://www.facebook.com/grovestreetpub" target="_blank" colorScheme="facebook">
          Facebook
        </Button>
      </Box>
    </Container>
  );
};

export default Home;