import { Card, Divider, Flex, Heading, Text } from "@chakra-ui/react";

export function Sidebar() {
  return (
    <Card flexDirection="column" bg="transparent" gap={6}>
      <Card borderRadius={0} bg="transparent" color="whiteAlpha.900" gap={6}>
        <Heading fontSize="1.2rem">
          Here you can choose the category you want
        </Heading>
        <Divider />
      </Card>
      <Card borderRadius={0} bg="transparent" color="whiteAlpha.800">
        <Text>Romantic comedy</Text>
        <Text>Comedy</Text>
        <Text>Romantic</Text>
      </Card>
    </Card>
  );
}
