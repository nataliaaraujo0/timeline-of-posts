import { Box, Flex, Image } from "@chakra-ui/react";
import { IPosts } from "../../interface/posts.interface";
import { PostTitle } from "../PostTitle/PostTitle";
interface IPostCard {
  title?: string;
  img?: string;
}
export function PostCard({ title, img }: IPostCard) {
  return (
    <Flex flexDirection="column" padding="1rem">
      <Image src={img} alt="Dan Abramov" borderRadius={6} />
      <PostTitle>{title}</PostTitle>
    </Flex>
  );
}
