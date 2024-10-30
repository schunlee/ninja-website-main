import { Box, Image, SimpleGrid} from '@chakra-ui/react';
import React from 'react';

const Banner = () => {
    return (
        <Box bg='gray.100' display="flex" justifyContent="center" alignItems="center" minH="70vh" position="relative">
            <SimpleGrid columns={{ base: 2, md: 2 }} w="60%">
                <Image src="/banner-1.png" />
                <Image src="/banner-2.png" />
            </SimpleGrid>
            <Image 
                src="/logo.png" 
                position="absolute" 
                top="5%" 
                left="50%" 
                transform="translateX(-50%)" 
                zIndex="5" 
                w="20%"
            />
        </Box>
    );
}

export default Banner;
