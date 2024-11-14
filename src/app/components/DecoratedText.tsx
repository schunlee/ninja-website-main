import { Heading } from "@chakra-ui/react";

interface Props {
  children: string;
}

const DecoratedText = ({ children }: Props) => {
  return (
    <Heading
            as={"span"}
            fontWeight="extrabold"
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "blue.400",
              zIndex: "-1",
            }}
          >
            {children}
          </Heading>
  );
};

export default DecoratedText;
