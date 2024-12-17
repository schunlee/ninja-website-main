import { Box, Center, Container, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { fonts } from "../fonts";
import PlayButton from "./PlayButton";
import GameScreen from "./GameScreen";
import Epic from "./Epic";
import GamerReviews from "./NewGamerComments";
import Banner from "./Banner";

const NewDownload = () => {
  return (
    <Center
      pt="0px"
      mt="-1px"
      backgroundImage="url('https://pics.narutostorm.com/new_bg.png')"
      bgSize="cover" // 背景覆盖
      fontSize="lg"
      fontWeight="bold"
      letterSpacing="10"
    >
      <Stack>
        <Banner />
        <Center mt="30px">
          <Image src="https://pics.narutostorm.com/desc_header.png" w={{ base: "350px", md: "800px" }} />
        </Center>

        <Container w={{ base: "350px", md: "800px" }}>
          <Text
            fontFamily={fonts.siyuanFont.style.fontFamily}
            textAlign="center"
            fontSize={{md: "30px"}}
            mt="20px"
          >
            <Box as="span" color="brown" fontWeight="extrabold">
              {"Naruto Storm :".toUpperCase()}
            </Box>{" "}
            Customize your ninja, master unique skills, and face off against
            powerful enemies. With nostalgic pixel art and engaging gameplay,
            this is the perfect adventure for any{" "}
            <Box as="span" color="brown" fontStyle="italic">
              Naruto fans!
            </Box>
          </Text>
        </Container>
        <Center>
          <PlayButton />
        </Center>
        <GameScreen />
        <Epic />
        <GamerReviews />
      </Stack>
    </Center>
  );
};

export default NewDownload;
