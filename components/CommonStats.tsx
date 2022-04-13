import { SimpleGrid, VStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Dataset } from "../lib/dataset";
import { CommonStat } from "./CommonStat";

interface CommonStatsProps {
  dataset: Dataset;
}

export const CommonStats: FC<CommonStatsProps> = ({ dataset }) => {
  return (
    <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={5} px={5}>
      <CommonStat label="Mean" value={dataset.mean()} />
      <CommonStat label="Range" value={dataset.range()} />
      <CommonStat label="IQR" value={dataset.iqr()} />
      <CommonStat label="Size" value={dataset.data.length} />
    </SimpleGrid>
  );
};
