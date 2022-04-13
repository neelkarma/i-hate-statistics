import { FC } from "react";
import { Text } from "@chakra-ui/react";
import { Dataset } from "../lib/dataset";

interface FivePointSummaryProps {
  dataset: Dataset;
}

export const FivePointSummary: FC<FivePointSummaryProps> = ({ dataset }) => {
  return (
    <>
      <Text color="gray.400" fontSize="2xl">
        Five Point Summary
      </Text>
      <Text fontFamily="mono" fontWeight="bold" fontSize="6xl">
        {dataset.min()}, {dataset.q1()}, {dataset.median()}, {dataset.q3()},{" "}
        {dataset.max()}
      </Text>
    </>
  );
};
