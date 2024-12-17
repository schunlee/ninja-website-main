"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  AspectRatio,
  Center,
} from "@chakra-ui/react";
import PlayButton from "../components/PlayButton";
import { fonts } from "../fonts";

export default function About() {
  return (
    <Box
      backgroundImage="url('https://pics.narutostorm.com/new_bg.png')"
      bgSize="cover" // 背景覆盖
      display="flex"
      justifyContent="center"
      //   minW="100%"
    >
      <Container maxW={"7xl"} display="flex">
        <Stack>
          <Center pt={{ base: "20px", md: "80px" }}>
            <Image src="star.png" objectFit="cover" h="50px" mr="20px" />
            <Text
              fontFamily={fonts.ruiziFont.style.fontFamily}
              fontSize="40px"
              color="rgb(142, 53, 28)"
            >
              ABOUT
            </Text>
            <Image src="star.png" objectFit="cover" h="50px" ml="20px" />
          </Center>

          <Stack
            py={{ base: 0, md: 28 }}
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
                height="full"
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={["full", "md"]}
                overflow={"hidden"}
              >
                <AspectRatio ratio={1}>
                  <iframe
                    title="naruto"
                    src="https://www.youtube.com/embed/VOUqDTJX7ms"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Center>
                <PlayButton />
              </Center>
              <Heading>
                <Text color="rgb(142, 53, 28)">Naruto Storm</Text>
                <Text
                  as={"span"}
                  color="Black"
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  Pixel_Style Naruto RPG
                </Text>
              </Heading>
              <Text
                color="rgb(142, 53, 28)"
                fontSize="18"
                fontWeight="semibold"
              >
                Naruto Ninja Storm allows players to battle with players accross
                over the world. Players can build your Power Naruto Team and
                unleash powerful jutsu attacks for ninja supremacy. Players will
                be able to customize their character's fighting style and
                recruit up to five ninjas and one support character to put their
                own stamp on the action.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              ></Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
