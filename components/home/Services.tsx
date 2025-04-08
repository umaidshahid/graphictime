import { Badge, Box, Card, Container, Flex, Grid, Heading, Link, Text } from "@radix-ui/themes";

const Services = () => {
  const services = [
    {
      title: "Offset Printing",
      description: "High-volume, high-quality print production for brochures, catalogs, and marketing materials.",
      icon: "🖨️"
    },
    {
      title: "Digital Printing",
      description: "Fast turnaround, cost-effective printing for short runs and personalized materials.",
      icon: "📄"
    },
    {
      title: "Large Format",
      description: "Eye-catching banners, posters, and signage that demand attention.",
      icon: "🖼️"
    },
    {
      title: "Binding & Finishing",
      description: "Professional binding, lamination, die-cutting, and specialty finishes.",
      icon: "📚"
    },
    {
      title: "Graphic Design",
      description: "Creative solutions from our team of experienced designers.",
      icon: "🎨"
    },
    {
      title: "Direct Mail",
      description: "End-to-end direct mail campaign management and fulfillment.",
      icon: "📬"
    }
  ];
  
  return (
    <Box id="services" py="9">
      <Container size="4">
        <Flex direction="column" align="center" gap="6">
          <Box mb="5">
            <Badge size="2">Our Services</Badge>
            <Heading size="8" mt="2">What We Offer</Heading>
            <Text size="4" color="gray" mt="2">
              Comprehensive printing solutions for all your business needs
            </Text>
          </Box>
          
          <Grid 
            columns={{ initial: '1', sm: '2', lg: '3' }} 
            gap="5"
            width="100%"
          >
            {services.map((service, index) => (
              <Card key={index} size="3">
                <Flex direction="column" gap="3">
                  <Text size="8">{service.icon}</Text>
                  <Heading size="4">{service.title}</Heading>
                  <Text>{service.description}</Text>
                  <Link href="#" mt="2">Learn more →</Link>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};

export default Services;