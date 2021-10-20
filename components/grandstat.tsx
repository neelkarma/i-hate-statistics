import { VStack, Text } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

const GrandStat: FC<{ label: string; value: ReactNode }> = ({
  label,
  value,
}) => {
  return (
    <VStack
      w="130px"
      p="10px"
      borderRadius="lg"
      borderColor="gray.600"
      borderWidth="1px"
      transitionDuration="150ms"
      transitionTimingFunction="ease-out"
      _hover={{
        backgroundColor: "gray.700",
        cursor: "default",
      }}
    >
      <Text fontWeight="bold" fontSize="3xl">
        {value}
      </Text>
      <Text fontWeight="light" color="gray.500">
        {label}
      </Text>
    </VStack>
  );
};

export default GrandStat;
