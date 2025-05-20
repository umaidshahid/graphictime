"use client";

import { Badge, Box, /*Button,*/ Card, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";

const Portfolio = () => {
  const projects = [
    {
      title: "Kraft Bags & Coffee Cups",
      desc: "Eco-friendly packaging solutions perfect for cafés and takeout services",
      image: "/kraft-bag.jpg",
      tags: ["Offset Printing", "Design", "Binding"]
    },
    {
      title: "Custom Mailer Box Kit",
      desc: "Stylish and sturdy mailer boxes designed for premium unboxing experiences",
      image: "/custom-mailbox-kit.jpg",
      tags: ["Digital Printing", "Design"]
    },
    {
      title: "Custom Product Packaging",
      desc: "Tailored packaging options that enhance brand visibility and shelf appeal",
      image: "custom-prod-pkg.jpg",
      tags: ["Large Format", "Promotional"]
    },
    {
      title: "Custom T-Shirts",
      desc: "High-quality printed apparel ideal for promotions, events, or brand merch",
      image: "/custom-tshirt.jpg",
      tags: ["Letterpress", "Premium Papers"]
    },
    {
      title: "Custom Brochures",
      desc: "Professional brochures with detailed layouts and premium finishes for impactful storytelling",
      image: "/custom-brochure.jpg",
      tags: ["Die-Cutting", "Special Finishes"]
    },
    {
      title: "Custom Posters",
      desc: "Vibrant, high-resolution posters perfect for events, decor, and visual marketing",
      image: "/custom-poster.jpg",
      tags: ["Offset Printing", "Binding"]
    }
  ];
  
  return (
    <Box id="portfolio" py="9" style={{ backgroundColor: 'var(--gray-2)' }}>
      <Container size="4">
        <Flex direction="column" align="center" gap="6">
          <Box mb="5">
            <Badge size="2">Our Portfolio</Badge>
            <Heading size="8" mt="2">Featured Products</Heading>
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
                      height: '380px', 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </Box>
                <Flex direction="column" gap="2" mt="3">
                  <Heading size="3">{project.title}</Heading>
                  <Text size="3" color="gray">{project.desc}</Text>
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
          
          {/* <Button size="3" mt="5">View All Projects</Button> */}
        </Flex>
      </Container>
    </Box>
  );
};

export default Portfolio;