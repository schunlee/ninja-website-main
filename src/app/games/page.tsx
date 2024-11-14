import { getAllPosts } from "@/app/lib/posts";
import {
  Box,
  Stack,
  Heading,
  SimpleGrid,
  Text,
  Container,
  Image,
} from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "@chakra-ui/react";

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <Box bg="gray.100">
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Games</Heading>
          <SimpleGrid columns={[1, 2]} spacing={10} marginTop={50}>
            {posts?.map((post) => (
              <Box
                key={post.slug}
                maxW={"450px"}
                w={"full"}
                bg="white"
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
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      color="gray.700"
                      fontSize={"2xl"}
                      fontFamily={"body"}
                    >
                      {post.meta?.title}
                    </Heading>
                  </Link>
                  <Box color={"gray.500"} minH="20">
                    <MDXRemote
                      source={
                        post.abstract
                      }
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
