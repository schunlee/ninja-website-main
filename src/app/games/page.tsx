import { Box, Image, Text, HStack, Center } from "@chakra-ui/react";
import { fonts } from "../fonts";

const Games = () => {
  return (
    <Box
      backgroundImage="url('https://pics.narutostorm.com/new_bg.png')"
      bgSize="cover"
    >
      <Center>
        <HStack>
          <Image src="star.png" objectFit="cover" h="30px" mr="20px" />
          <Text
            fontFamily={fonts.ruiziFont.style.fontFamily}
            fontSize="30px"
            color="rgb(142, 53, 28)"
          >
            Games
          </Text>
          <Image src="star.png" objectFit="cover" h="30px" ml="20px" />
        </HStack>
      </Center>
    </Box>
  );
};

export default Games;
