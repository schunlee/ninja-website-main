import { Box, Button, Center, Heading, Link, Stack } from '@chakra-ui/react'
import React from 'react'


const DownloadApk = () => {
    return (
        <Box bg="gray.100">
            <Center>
                <Stack mt="10">
                    <Heading>Download APP</Heading>
                    <Button colorScheme='blue'><Link href='https://cdn.pixelshippuden.com/pixelshippuden_f_release_1008201500.apk'>Get started</Link></Button>
                </Stack>
            </Center>
        </Box>
    )
}

export default DownloadApk