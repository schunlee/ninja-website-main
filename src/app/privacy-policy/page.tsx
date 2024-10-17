import { MDXRemote } from "next-mdx-remote/rsc";

import { getPostBySlug} from "@/app/lib/posts";
import { Box, Container } from "@chakra-ui/react";

async function getPost() {
    const post = getPostBySlug("privacy-policy");
    console.log(post);
    return { post };
}

export default async function PrivacyPolicy() {
    const { post } = await getPost();

    return (
        <Container bg='gray.100'display="flex" justifyContent="center" minW='100%' minH='900px'>
            <Box>
                <MDXRemote source={post.content} components={{}} options={{}} />
            </Box>
        </Container>
    );
}
