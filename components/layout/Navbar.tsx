"use client";

import { Box, Button, Container, Flex, Heading } from "@radix-ui/themes";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <Box 
      position="sticky" 
      top="0" 
      style={{ 
        backdropFilter: 'blur(10px)',
        // backgroundColor: 'white',
        zIndex: 100 
      }}
    >
      <Container size="4">
        <Flex py="3" justify="between" align="center">
          <Heading size="5">GraphicTime</Heading>
          
          {/* Desktop Navigation */}
          <Box display={{ initial: 'none', md: 'block' }}>
            <NavigationMenu.Root className={styles.NavigationMenuRoot}>
              <NavigationMenu.List className={styles.NavigationMenuList}>
                <NavigationMenu.Item>
                  <NavigationMenu.Link 
                    className={styles.NavigationMenuLink} 
                    href="/"
                  >
                    Home
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link 
                    className={styles.NavigationMenuLink} 
                    href="/boxes"
                  >
                    Boxes
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link 
                    className={styles.NavigationMenuLink} 
                    href="/bags"
                  >
                    Bags
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link 
                    className={styles.NavigationMenuLink} 
                    href="/contact"
                  >
                    Contact
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link 
                    className={styles.NavigationMenuLink} 
                    href="/about"
                  >
                    About
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator className={styles.NavigationMenuIndicator}>
                  <div className={styles.Arrow} />
                </NavigationMenu.Indicator>
              </NavigationMenu.List>

              <div className={styles.ViewportPosition}>
                <NavigationMenu.Viewport className={styles.NavigationMenuViewport} />
              </div>
            </NavigationMenu.Root>
          </Box>
          
          {/* Mobile menu button */}
          <Box display={{ md: 'none' }}>
            <Button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              variant="ghost"
            >
              Menu
            </Button>
          </Box>
          
          {/* CTA Button */}
          <Flex display={{ initial: 'none', md: 'flex' }}>
            <Button size="3">
              Get a Quote
            </Button>
          </Flex>
        </Flex>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <Flex 
            direction="column" 
            gap="4" 
            py="4" 
            display={{ md: 'none' }}
          >
            <Link href="/" className={styles.MobileLink}>Home</Link>
            <Link href="/boxes" className={styles.MobileLink}>Boxes</Link>
            <Link href="/bags" className={styles.MobileLink}>Bags</Link>
            <Link href="/contact" className={styles.MobileLink}>Contact</Link>
            <Link href="/about" className={styles.MobileLink}>About</Link>
            <Flex>
              <Button size="3">Get a Quote</Button>
            </Flex>
          </Flex>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;