import { VStack } from "@chakra-ui/react";
import { FC } from "react";
import { Dataset } from "../lib/dataset";
import { LongStat } from "./LongStat";

interface LongStatsProps {
  dataset: Dataset;
}

export const LongStats: FC<LongStatsProps> = ({ dataset }) => {
  return (
    <VStack align="left">
      <LongStat label="Mode(s):" value={dataset.modes().join(", ")} />
      <LongStat label="Sorted Dataset:" value={dataset.data.join(", ")} />
    </VStack>
  );
};
