import { HStack, Text } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";
import { FC } from "react";
import Link from "next/link";

export const BackButton: FC = () => {
  return (
    <Link href="/" passHref>
      <HStack
        as="button"
        color="gray.500"
        _hover={{
          color: "gray.400",
        }}
        _active={{
          color: "gray.600",
        }}
        transition="all 0.2s cubic-bezier(0, 0, 0.2, 1)"
      >
        <IoArrowBack style={{ fontSize: "1.3rem" }} />
        <Text>Try another dataset</Text>
      </HStack>
    </Link>
  );
};
