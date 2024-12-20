import {
  Box,
  Stack,
  SimpleGrid,
  Text,
  Center,
  Container,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { fonts } from "../fonts";
import VideoCard from "../components/VideoCard";

export default async function Posts() {
  return (
    <Box
      backgroundImage="url('https://pics.narutostorm.com/new_bg.png')"
      bgSize="cover"
    >
      <Container maxW={"7xl"} pb="30px" as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Spacer pt="30px"></Spacer>
          <Center>
            <Image src="star.png" objectFit="cover" h="30px" mr="20px" />
            <Text
              fontFamily={fonts.ruiziFont.style.fontFamily}
              fontSize="30px"
              color="rgb(142, 53, 28)"
            >
              ANIME
            </Text>
            <Image src="star.png" objectFit="cover" h="30px" ml="20px" />
          </Center>
          <Box as="span" color="brown" fontWeight="extrabold" fontSize="25px" mt="100px">
            {"Naruto".toUpperCase()}
          </Box>
          <SimpleGrid columns={[1, 2]} spacing={10} marginTop={30}>
            <VideoCard
              hoverPic="https://pics.narutostorm.com/naruto.png"
              title="NARUTO"
            />
            <VideoCard
              hoverPic="https://pics.narutostorm.com/shippuden.png"
              title="NARUTO SHIPPUDEN"
            />
          </SimpleGrid>
          <Box as="span" color="brown" fontWeight="extrabold" fontSize="25px" mt="100px">
            {"Boruto".toUpperCase()}
          </Box>
          <SimpleGrid columns={[1, 2]} spacing={10} marginTop={30}>
            <VideoCard
              hoverPic="https://pics.narutostorm.com/boruto.png"
              title="BORUTO"
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
