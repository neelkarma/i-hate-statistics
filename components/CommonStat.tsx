import { VStack, Text } from "@chakra-ui/react";
import { FC } from "react";

interface CommonStatProps {
  label: string;
  value: string | number;
}

export const CommonStat: FC<CommonStatProps> = ({ label: name, value }) => {
  return (
    <VStack align="left">
      <Text fontFamily="mono" fontSize="3xl">
        {value}
      </Text>
      <Text color="gray.400" fontSize="lg">
        {name}
      </Text>
    </VStack>
  );
};
