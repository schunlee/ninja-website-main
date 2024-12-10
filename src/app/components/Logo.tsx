import { Link, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image src="/logo.png" width="100px" />
      </Link>
    </>
  );
};

export default Logo;
