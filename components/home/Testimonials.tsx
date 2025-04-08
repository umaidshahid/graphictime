import { Avatar, Badge, Box, Card, Container, Flex, Heading, Text } from "@radix-ui/themes";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Marketing Director, Tech Innovations",
      avatar: "/api/placeholder/60/60",
      quote: "The quality and attention to detail in GraphicTime's printing work has elevated our brand materials. Always on time and exceeding expectations."
    },
    {
      name: "Michael Chen",
      company: "CEO, Design Studios Inc.",
      avatar: "/api/placeholder/60/60",
      quote: "We've partnered with GraphicTime for over 5 years now. Their consistent quality and collaborative approach make them an extension of our team."
    },
    {
      name: "Jessica Rodriguez",
      company: "Event Planner, Conference Solutions",
      avatar: "/api/placeholder/60/60",
      quote: "When timelines are tight and quality is non-negotiable, GraphicTime delivers every time. Their large format printing for our events is flawless."
    }
  ];
  
  return (
    <Box id="testimonials" py="9">
      <Container size="3">
        <Flex direction="column" align="center" gap="6">
          <Flex direction="column" align="center" mb="5">
            <Badge size="2">Testimonials</Badge>
            <Heading size="8" mt="2">What Our Clients Say</Heading>
            <Text size="4" color="gray" mt="2" style={{ maxWidth: '650px' }}>
              We take pride in our client relationships and the quality of our work
            </Text>
          </Flex>
          
          <Flex 
            direction={{ initial: 'column', md: 'row' }} 
            gap="5" 
            width="100%"
          >
            {testimonials.map((testimonial, index) => (
              <Card key={index} size="3" style={{ flex: 1 }}>
                <Flex direction="column" gap="4">
                  <Text size="5" style={{ fontStyle: 'italic' }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </Text>
                  <Flex gap="3" align="center">
                    <Avatar 
                      src={testimonial.avatar} 
                      fallback={testimonial.name.charAt(0)} 
                      size="3" 
                    />
                    <Box>
                      <Text weight="bold">{testimonial.name}</Text>
                      <Text size="2" color="gray">{testimonial.company}</Text>
                    </Box>
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Testimonials;