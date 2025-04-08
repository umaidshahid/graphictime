"use client";

import { Badge, Box, Button, Card, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";

const Portfolio = () => {
  const projects = [
    {
      title: "Annual Report Design",
      client: "Financial Corp",
      image: "/api/placeholder/600/400",
      tags: ["Offset Printing", "Design", "Binding"]
    },
    {
      title: "Product Catalog",
      client: "Luxury Goods Co.",
      image: "/api/placeholder/600/400",
      tags: ["Digital Printing", "Design"]
    },
    {
      title: "Event Branding",
      client: "Tech Conference",
      image: "/api/placeholder/600/400",
      tags: ["Large Format", "Promotional"]
    },
    {
      title: "Corporate Stationery",
      client: "Legal Services Inc.",
      image: "/api/placeholder/600/400",
      tags: ["Letterpress", "Premium Papers"]
    },
    {
      title: "Packaging Design",
      client: "Organic Foods",
      image: "/api/placeholder/600/400",
      tags: ["Die-Cutting", "Special Finishes"]
    },
    {
      title: "Magazine Publication",
      client: "Lifestyle Media",
      image: "/api/placeholder/600/400",
      tags: ["Offset Printing", "Binding"]
    }
  ];
  
  return (
    <Box id="portfolio" py="9" style={{ backgroundColor: 'var(--gray-2)' }}>
      <Container size="4">
        <Flex direction="column" align="center" gap="6">
          <Box mb="5">
            <Badge size="2">Our Portfolio</Badge>
            <Heading size="8" mt="2">Featured Projects</Heading>
            <Text size="4" color="gray" mt="2">
              A showcase of our finest print and design work
            </Text>
          </Box>
          
          <Grid 
            columns={{ initial: '1', sm: '2', lg: '3' }} 
            gap="5"
            width="100%"
          >
            {projects.map((project, index) => (
              <Card key={index} size="2">
                <Box style={{ overflow: 'hidden', borderRadius: 'var(--radius-3)' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-image"
                    style={{ 
                      width: '100%', 
                      height: '240px', 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </Box>
                <Flex direction="column" gap="2" mt="3">
                  <Heading size="3">{project.title}</Heading>
                  <Text size="2" color="gray">Client: {project.client}</Text>
                  <Flex gap="2" mt="2" wrap="wrap">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" radius="full">
                        {tag}
                      </Badge>
                    ))}
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Grid>
          
          <Button size="3" mt="5">View All Projects</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Portfolio;