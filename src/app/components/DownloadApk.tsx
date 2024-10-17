import { Box, Button, Center, Heading, Stack } from '@chakra-ui/react'
import React from 'react'


const DownloadApk = () => {
    return (
        <Box bg="gray.100">
            <Center>
                <Stack>
                    <Heading>Download APP</Heading>
                    <Button colorScheme='blue'>Get started</Button>
                </Stack>
            </Center>
        </Box>
    )
}

export default DownloadApk