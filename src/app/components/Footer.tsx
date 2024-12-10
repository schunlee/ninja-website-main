"use client";

import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Center,
} from "@chakra-ui/react";

import CookieConsent from "react-cookie-consent";
import FooterButton from "./FooterButton";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"bold"} fontSize="md" mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg="black"
      color="whiteAlpha.800"
    >
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Container as={Stack} maxW={"6xl"} py={10} fontWeight="semibold" fontSize="sm">
        <SimpleGrid
          columns={{ base: 3, sm: 3, md: 3 }}
          spacing={10}
          justifyItems="center"
        >
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"/about"}>
              About
            </Box>
            <Box as="a" href={"/games"}>
              Games
            </Box>
            <Box as="a" href={"/faq"}>
              FAQ
            </Box>
          </Stack>
          <Stack align={"center"}>
            <ListHeader>Install Game</ListHeader>
            <FooterButton />
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={"/privacy-policy"}>
              Privacy Policy
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        // borderTopWidth={1}
        // borderStyle={"solid"}
        // borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          justify="center"
          align={{ md: "center" }}
        >
          <Center>
            <Text>© {new Date().getFullYear()} Naruto Shippuden</Text>
          </Center>
          <Center>
            <Text>All rights reserved</Text>
          </Center>
        </Container>
      </Box>
    </Box>
  );
}
