import { getAllPosts } from "@/app/lib/posts";
import {
  Box,
  Stack,
  Heading,
  SimpleGrid,
  Text,
  Center,
  Container,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "@chakra-ui/react";
import { fonts } from "../fonts";

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <Box backgroundImage="url('https://pics.narutostorm.com/new_bg.png')" bgSize="cover">
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
              News
            </Text>
            <Image src="star.png" objectFit="cover" h="30px" ml="20px" />
          </Center>
          <SimpleGrid columns={[1, 2]} spacing={10} marginTop={50}>
            {posts?.map((post) => (
              <Box
                key={post.slug}
                maxW={"450px"}
                w={"full"}
                bg="rgb(142, 53, 28)"
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
              >
                <Box
                  h={"210px"}
                  bg={"gray.100"}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={"relative"}
                >
                  <Image
                    src={post.meta?.banner_url.toString()}
                    alt="naruto"
                    objectFit="cover"
                    h="100%"
                    w="100%"
                  />
                </Box>
                <Stack>
                  <Text
                    color={"green.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  ></Text>
                  <Link
                    href={`/games/${post.slug}`}
                    className="group font-normal overflow-hidden cursor-pointer no-underline transition fade-in-up "
                  >
                    <Heading
                      color="whiteAlpha.800"
                      fontSize={"2xl"}
                      fontFamily={"body"}
                    >
                      {post.meta?.title}
                    </Heading>
                  </Link>
                  <Box color="whiteAlpha.800" minH="20">
                    <MDXRemote
                      source={post.abstract}
                      components={{}}
                      options={{}}
                    />
                  </Box>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
