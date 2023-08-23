import { Flex } from "@chakra-ui/react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Layout } from "./shared/Layout/Layout";

export function App() {
  return (
    <Flex justifyContent="center">
      <Layout sidebar={<Sidebar />} />
    </Flex>
  );
}
