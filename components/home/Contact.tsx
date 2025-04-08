import { Badge, Box, Button, Card, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";

const Contact = () => {
  return (
    <Box id="contact" py="9">
      <Container size="4">
        <Grid columns={{ initial: '1', md: '2' }} gap="6">
          <Flex direction="column" gap="5">
            <Badge size="3">Contact Us</Badge>
            <Heading size="7">Let&apos;s Discuss Your Project</Heading>
            <Text size="3">
              Whether you&apos;re ready to start a new print project or have questions about our services, we&apos;re here to help. Reach out to our team for expert advice and quotes.
            </Text>
            
            <Flex direction="column" gap="4" mt="3">
              <Flex gap="3" align="center">
                <Box>📞</Box>
                <Box>
                  <Text weight="bold">Call Us</Text>
                  <Text> (+92) 314 4684477</Text>
                </Box>
              </Flex>
              <Flex gap="3" align="center">
                <Box>📧</Box>
                <Box>
                  <Text weight="bold">Email</Text>
                  <Text> info@graphictime.com</Text>
                </Box>
              </Flex>
              {/* <Flex gap="3" align="center">
                <Box>📍</Box>
                <Box>
                  <Text weight="bold">Visit Our Facility </Text>
                  <Text>123 Print Avenue, Suite 400<br />Creativetown, CT 10101</Text>
                </Box>
              </Flex> */}
              <Flex gap="3" align="center">
                <Box>⏰</Box>
                <Box>
                  <Text weight="bold">Business Hours </Text>
                  <Text>Monday-Friday: 8am-6pm<br />Saturday: 10am-2pm</Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          
          <Card size="3">
            <Heading size="4" mb="4">Send Us a Message</Heading>
            <Flex direction="column" gap="3">
              <Box>
                <Text size="2" mb="1" weight="bold">Name</Text>
                <input 
                  type="text" 
                  placeholder="Your full name" 
                  style={{ 
                    width: '100%', 
                    padding: '10px', 
                    borderRadius: 'var(--radius-2)', 
                    border: '1px solid var(--gray-6)' 
                  }} 
                />
              </Box>
              <Box>
                <Text size="2" mb="1" weight="bold">Email</Text>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  style={{ 
                    width: '100%', 
                    padding: '10px', 
                    borderRadius: 'var(--radius-2)', 
                    border: '1px solid var(--gray-6)' 
                  }} 
                />
              </Box>
              <Box>
                <Text size="2" mb="1" weight="bold">Project Type</Text>
                <select 
                  style={{ 
                    width: '100%', 
                    padding: '10px', 
                    borderRadius: 'var(--radius-2)', 
                    border: '1px solid var(--gray-6)' 
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="offset">Offset Printing</option>
                  <option value="digital">Digital Printing</option>
                  <option value="large-format">Large Format</option>
                  <option value="design">Graphic Design</option>
                  <option value="other">Other</option>
                </select>
              </Box>
              <Box>
                <Text size="2" mb="1" weight="bold">Message</Text>
                <textarea 
                  placeholder="Tell us about your project" 
                  rows={5} 
                  style={{ 
                    width: '100%', 
                    padding: '10px', 
                    borderRadius: 'var(--radius-2)', 
                    border: '1px solid var(--gray-6)' 
                  }} 
                />
              </Box>
              <Button size="3" mt="2">Send Message</Button>
            </Flex>
          </Card>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;