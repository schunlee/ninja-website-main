import {
  Box,
  Image,
  Text,
  HStack,
  Center,
  Spacer,
  Stack,
  Button,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { fonts } from "../fonts";

const Games = () => {
  return (
    <Box
      backgroundImage="url('https://pics.narutostorm.com/new_bg.png')"
      bgSize="cover"
    >
      <Spacer pt="30px"></Spacer>
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
      <Center>
        <Stack minH="1000">
          <Text
            color="rgb(142, 53, 28)"
            fontSize="18"
            fontWeight="semibold"
            mt="50px"
            ml="30px"
          >
            We provide exclusive language versions for players from all over the
            world
          </Text>
          <SimpleGrid columns={[1, 2]} spacing={10} mt="30px">
            <Center>
              <Button
                as={Link}
                href="/games/english"
                width="80%"
                size="lg"
                color="whiteAlpha.800"
                bgColor="rgb(142, 53, 28)"
                _hover={{ bgColor: "rgb(78, 27, 16)" }}
              >
                English
              </Button>
            </Center>
            <Center>
              <Button
                as={Link}
                href="/games/english"
                width="80%"
                size="lg"
                color="whiteAlpha.800"
                bgColor="rgb(142, 53, 28)"
                _hover={{ bgColor: "rgb(78, 27, 16)" }}
              >
                Português
              </Button>
            </Center>
            <Center>
              <Button
                as={Link}
                href="/games/english"
                width="80%"
                size="lg"
                color="whiteAlpha.800"
                bgColor="rgb(142, 53, 28)"
                _hover={{ bgColor: "rgb(78, 27, 16)" }}
              >
                Deutsch
              </Button>
            </Center>
            <Center>
              <Button
                as={Link}
                href="/games/english"
                width="80%"
                size="lg"
                color="whiteAlpha.800"
                bgColor="rgb(142, 53, 28)"
                _hover={{ bgColor: "rgb(78, 27, 16)" }}
              >
                Français
              </Button>
            </Center>
            <Center>
              <Button
                as={Link}
                href="/games/english"
                width="80%"
                size="lg"
                color="whiteAlpha.800"
                bgColor="rgb(142, 53, 28)"
                _hover={{ bgColor: "rgb(78, 27, 16)" }}
              >
                Tiếng Việt
              </Button>
            </Center>
            <Center>
              <Button
                as={Link}
                href="/games/english"
                width="80%"
                size="lg"
                color="whiteAlpha.800"
                bgColor="rgb(142, 53, 28)"
                _hover={{ bgColor: "rgb(78, 27, 16)" }}
              >
                日本語
              </Button>
            </Center>
            <Center>
              <Button
                as={Link}
                href="/games/english"
                width="80%"
                size="lg"
                color="whiteAlpha.800"
                bgColor="rgb(142, 53, 28)"
                _hover={{ bgColor: "rgb(78, 27, 16)" }}
              >
                Español
              </Button>
            </Center>
            <Center>
              <Button
                as={Link}
                href="/games/english"
                width="80%"
                size="lg"
                color="whiteAlpha.800"
                bgColor="rgb(142, 53, 28)"
                _hover={{ bgColor: "rgb(78, 27, 16)" }}
              >
                繁體中文
              </Button>
            </Center>
          </SimpleGrid>
        </Stack>
      </Center>
    </Box>
  );
};

export default Games;
