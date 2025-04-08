import { Badge, Box, Button, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";

const About = () => {
  return (
    <Box id="about" py="9" style={{ backgroundColor: 'var(--gray-2)' }}>
      <Container size="4">
        <Grid columns={{ initial: '1', md: '2' }} gap="6" align="center">
          <Flex direction="column" gap="5">
            <Badge size="2">Our Story</Badge>
            <Heading size="7">A Tradition of Print Excellence</Heading>
            <Text size="3">
              Founded in 1995, GraphicTime began as a small family-owned print shop with a passion for quality and craftsmanship. Over the decades, we&apos;ve grown into a full-service printing company, embracing new technologies while maintaining our commitment to exceptional quality.
            </Text>
            <Text size="3">
              Today, our team of 50+ printing professionals and designers work with state-of-the-art equipment to deliver print solutions that help businesses communicate, market, and grow.
            </Text>
            <Flex gap="3" mt="2">
              <Button variant="outline">Our Values</Button>
              <Button variant="outline">Meet Our Team</Button>
            </Flex>
          </Flex>
          
          <Box style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
            <img
              src="/api/placeholder/800/600"
              alt="Our printing facility"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: 'var(--radius-3)'
              }}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;