import type { Dataset } from "../lib/dataset";
import type { FC } from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import GrandStat from "./grandstat";

const FivePointSummary: FC<{ dataset: Dataset }> = ({ dataset }) => {
  return (
    <SimpleGrid pb={5} columns={[1, 1, 5]} spacing={[5, 5, 10]}>
      <GrandStat label="MIN" value={dataset.min()} />
      <GrandStat
        label="Q1"
        value={isNaN(dataset.q1()) ? "None" : dataset.q1()}
      />
      <GrandStat label="MEDIAN" value={dataset.median()} />
      <GrandStat
        label="Q3"
        value={isNaN(dataset.q3()) ? "None" : dataset.q3()}
      />
      <GrandStat label="MAX" value={dataset.max()} />
    </SimpleGrid>
  );
};

export default FivePointSummary;
