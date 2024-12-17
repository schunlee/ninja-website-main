import { Center, Stack, Image, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "./ScreenCarousels";
import { fonts } from "../fonts";

const Epic = () => {
  const slides = [
    {
      img: "https://pics.narutostorm.com/epic_1.png",
    },
    {
      img: "https://pics.narutostorm.com/epic_2.png",
    },
    {
      img: "https://pics.narutostorm.com/epic_3.png",
    },
  ];
  return (
    <Center mt={{ base: "0px", md: "30px" }}>
      <Stack>
        <Center>
          <Image src="https://pics.narutostorm.com/star.png" objectFit="cover" h="30px" mr="10px" />
          <Text
            fontFamily={fonts.ruiziFont.style.fontFamily}
            fontSize={{ base: "20px", md: "50px" }}
            color="rgb(142, 53, 28)"
          >
            EPIC NINJA
          </Text>
          <Image src="https://pics.narutostorm.com/star.png" objectFit="cover" h="30px" ml="10px" />
        </Center>
        <Carousel slides={slides} />
      </Stack>
    </Center>
  );
};

export default Epic;
