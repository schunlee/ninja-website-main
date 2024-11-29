"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  AspectRatio,
  Link,
} from "@chakra-ui/react";
import DecoratedText from "../components/DecoratedText";

export default function About() {
  return (
    <Box
      bg={"gray.100"}
      zIndex="0"
      position="relative"
      display="flex"
      justifyContent="center"
      //   minW="100%"
    >
      <Container maxW={"7xl"} display="flex">
        <Stack
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
            zIndex={20}
              position={"relative"}
              height="full"
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={["full", "md"]}
              overflow={"hidden"}
            >
              <AspectRatio ratio={1}>
                <iframe
                  title="naruto"
                  src="https://www.youtube.com/embed/TZYo2QxwV58"
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading>
              <DecoratedText>Naruto Storm</DecoratedText>
              <br />
              <Text
                as={"span"}
                color={"blue.400"}
                fontSize="2xl"
                fontWeight="bold"
              >
                Pixel_Style Naruto RPG
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize="18">
              Naruto Ninja Storm allows players to battle with players accross
              over the world. Players can build your Power Naruto Team and
              unleash powerful jutsu attacks for ninja supremacy. Players will
              be able to customize their character's fighting style and recruit
              up to five ninjas and one support character to put their own stamp
              on the action.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"blue"}
                bg={"blue.400"}
                _hover={{ bg: "blue.500" }}
              >
                <Link href="https://cdn.jksfun.com/xshy_apk/pixelshippuden_f_release_1021120000.apk">
                  Get started
                </Link>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
