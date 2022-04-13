import { HStack, Text } from "@chakra-ui/react";
import { FC } from "react";

interface LongStatProps {
  label: string;
  value: string | number;
}

export const LongStat: FC<LongStatProps> = ({ label, value }) => {
  return (
    <HStack>
      <Text color="gray.400">{label}</Text>
      <Text fontFamily="mono">{value}</Text>
    </HStack>
  );
};
