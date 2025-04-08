import { Box, Container, Flex, Grid, Heading, Link, Separator, Text } from "@radix-ui/themes";

const Footer = () => {
  return (
    <Box py="6" style={{ backgroundColor: 'var(--gray-1)' }}>
      <Container size="4">
        <Grid columns={{ initial: '1', sm: '2', md: '4' }} gap="5">
          <Flex direction="column" gap="3">
            <Heading size="5">GraphicTime</Heading>
            <Text size="2">
              Premium printing services for businesses who demand quality, reliability, and exceptional craftsmanship.
            </Text>
          </Flex>
          
          <Flex direction="column" gap="2">
            <Heading size="3">Services</Heading>
            <Link size="2">Offset Printing</Link>
            <Link size="2">Digital Printing</Link>
            <Link size="2">Large Format</Link>
            <Link size="2">Binding & Finishing</Link>
            <Link size="2">Graphic Design</Link>
          </Flex>
          
          <Flex direction="column" gap="2">
            <Heading size="3">Company</Heading>
            <Link size="2">About Us</Link>
            <Link size="2">Our Team</Link>
            <Link size="2">Careers</Link>
            <Link size="2">Blog</Link>
            <Link size="2">Contact</Link>
          </Flex>
          
          <Flex direction="column" gap="2">
            <Heading size="3">Legal</Heading>
            <Link size="2">Privacy Policy</Link>
            <Link size="2">Terms of Service</Link>
            <Link size="2">Sitemap</Link>
          </Flex>
        </Grid>
        
        <Separator my="5" size="4" />
        
        <Flex justify="between" align="center" wrap="wrap" gap="4">
          <Text size="2">© 2025 GraphicTime. All rights reserved.</Text>
          <Flex gap="4">
            <Link>Facebook</Link>
            <Link>Twitter</Link>
            <Link>Instagram</Link>
            <Link>LinkedIn</Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;