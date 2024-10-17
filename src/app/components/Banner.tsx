
import { Box, Container, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';

const Banner = () => {
    return (
        <Box bg='gray.100' display="flex" justifyContent="center" alignItems="center" minH="70vh">
            <Stack align="center" w="60%" spacing={10}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Image src="/ads-3.png" />
                    <Image src="/ads-2.png" />
                </SimpleGrid>
            </Stack>
        </Box>
    );
}

export default Banner;
