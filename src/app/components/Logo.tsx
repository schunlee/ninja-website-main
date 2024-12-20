import { Link, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image src="https://pics.narutostorm.com/logo.png" width={{md: "100px", base: "150px"}} />
      </Link>
    </>
  );
};

export default Logo;
