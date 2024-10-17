import { Button, Image } from '@chakra-ui/react'

export const AndroidBadge = () => {
  return (
    <Button
      as="a"
      href="https://cdn.pixelshippuden.com/pixelshippuden_f_release_1008201500.apk" // 替换为你的apk链接
      target="_blank"
      rel="noopener noreferrer"
      variant="link"
      display="inline-flex"
      alignItems="center"
      p={0}
      height="auto"
      _hover={{ textDecoration: 'none' }}>
      <Image
        src="/android-icon.svg"
        alt="Download apk of pixel naruto game"
        height="40px"
      />
    </Button>
  )
}