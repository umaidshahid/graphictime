import { Box, Button, Container, Flex, Heading, Text } from "@radix-ui/themes";

const Hero = () => {
  return (
    <Box 
      style={{ 
        backgroundImage: 'url("/api/placeholder/1920/1080")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      <Box 
        style={{ 
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }} 
      />
      <Container size="4">
        <Flex 
          direction="column" 
          align="center" 
          justify="center" 
          py={{ initial: '8', md: '9' }} 
          gap="5"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <Heading 
            size={{ initial: '8', md: '9' }} 
            align="center"
            style={{ maxWidth: '800px' }}
          >
            Crafting Print Excellence Since 1995
          </Heading>
          <Text 
            size={{ initial: '4', md: '5' }} 
            align="center" 
            style={{ maxWidth: '650px' }}
          >
            Premium printing services for businesses who demand quality, reliability, and exceptional craftsmanship.
          </Text>
          <Flex gap="4" mt="5">
            <Button size="4">
              View Our Work
            </Button>
            <Button size="4" variant="outline">
              Our Services
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;