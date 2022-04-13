import { HStack, Switch, VStack, Text } from "@chakra-ui/react";
import { ChangeEventHandler, FC, useCallback, useState } from "react";
import { Dataset } from "../lib/dataset";
import { LongStat } from "./LongStat";

interface VarianceStatsProps {
  dataset: Dataset;
}

export const VarianceStats: FC<VarianceStatsProps> = ({ dataset }) => {
  const [isSample, setIsSample] = useState(false);

  const onSwitchChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => setIsSample(e.target.checked),
    []
  );

  return (
    <VStack align="left">
      <HStack>
        <Text
          color={isSample ? "gray.400" : "gray.300"}
          transition="all 0.2s cubic-bezier(0, 0, 0.2, 1)"
        >
          Population
        </Text>
        <Switch onChange={onSwitchChange} />
        <Text
          color={isSample ? "gray.300" : "gray.400"}
          transition="all 0.2s cubic-bezier(0, 0, 0.2, 1)"
        >
          Sample
        </Text>
      </HStack>
      <LongStat
        label="Variance:"
        value={
          isSample ? dataset.sampleVariance() : dataset.populationVariance()
        }
      />
      <LongStat
        label="Standard Deviation:"
        value={isSample ? dataset.sampleStdev() : dataset.populationStdev()}
      />
    </VStack>
  );
};
