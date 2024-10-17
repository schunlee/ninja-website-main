import { MDXRemote } from "next-mdx-remote/rsc";

import { getPostBySlug, getAllPosts } from "@/app/lib/posts";
import { Box, Image, Text, Container, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { serialize } from 'next-mdx-remote/serialize';


type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

async function getPost(params: Props["params"]) {
    const post = getPostBySlug(params.slug);
    return { post };
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post: any) => ({ slug: post.slug }));
}

export default async function Post({ params }: Props) {
    const { post } = await getPost(params);

    return (
        <Box bg='gray.100' display="flex" justifyContent="center" minW='100%'>
            <Container maxW={'7xl'}>
                <SimpleGrid
                    columns={{ base: 1, lg: 1 }}
                    alignContent="center"
                    spacing={{ base: 8, md: 10 }}>
                    <Flex justifyContent="center" mt="10">
                        <Image
                            rounded={'md'}
                            alt={'product image'}
                            src={post.meta?.banner_url.toString()}
                            fit={'cover'}
                            align={'center'}
                            w='300px'
                            h='300px'
                        />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={'header'} textAlign="center">
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                {post.meta.title}
                            </Heading>
                            <Text
                                mt={5}
                                fontWeight={300}
                                fontSize={'2xl'}>
                                {new Date(post.meta?.date).toLocaleDateString('en', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </Text>
                        </Box>
                    </Stack>
                    <Stack fontSize={'2xl'}>
                        <MDXRemote source={post.content}/>
                    </Stack>
                </SimpleGrid>
            </Container>
            </Box>

    );
}