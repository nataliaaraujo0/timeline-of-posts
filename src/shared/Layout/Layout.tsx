import { Flex, Heading, Highlight } from "@chakra-ui/react";
import { ReactElement } from "react";

interface iLayout {
  sidebar?: ReactElement;
  posts?: ReactElement;
}
export function Layout({ sidebar, posts }: iLayout) {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      maxWidth={1120}
      width="100%"
      height="auto"
      padding="1rem"
    >
      <Flex marginBottom={12}>
        <Heading width={327} height={102} fontSize="2rem">
          <Highlight query="otaku" styles={{ px: "2", py: "1", bg: "red.100" }}>
            Welcome to the stinky otaku social network
          </Highlight>
        </Heading>
      </Flex>
      <Flex height="auto" width="100%" gap={8}>
        <Flex width="30%">{sidebar}</Flex>
        <Flex width="70%" bg="orange.900">
          {posts}
        </Flex>
      </Flex>
    </Flex>
  );
}
