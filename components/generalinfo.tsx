import type { FC } from "react";
import { Table, Tbody, Tr, Td, Thead, Th } from "@chakra-ui/react";
import type { Dataset } from "../lib/dataset";

const GeneralInfo: FC<{ dataset: Dataset }> = ({ dataset }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Property</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Sorted Dataset</Td>
          <Td>{dataset.data.join(", ")}</Td>
        </Tr>
        <Tr>
          <Td>Dataset Size</Td>
          <Td>{dataset.data.length}</Td>
        </Tr>
        <Tr>
          <Td>Mean</Td>
          <Td>{dataset.mean()}</Td>
        </Tr>
        <Tr>
          <Td>{dataset.modes().length > 1 ? "Modes" : "Mode"}</Td>
          <Td>
            {dataset.modes().length ? dataset.modes().join(", ") : "None"}
          </Td>
        </Tr>
        <Tr>
          <Td>Range</Td>
          <Td>{dataset.range()}</Td>
        </Tr>
        <Tr>
          <Td>IQR</Td>
          <Td>{isNaN(dataset.iqr()) ? "None" : dataset.iqr()}</Td>
        </Tr>
        {/* TODO: Turn population/sample info into a toggleable value instead of showing both */}
        <Tr>
          <Td>Population Variance</Td>
          <Td>{dataset.populationVariance()}</Td>
        </Tr>
        <Tr>
          <Td>Population Standard Deviation</Td>
          <Td>{dataset.populationStdev()}</Td>
        </Tr>
        <Tr>
          <Td>Sample Variance</Td>
          <Td>
            {isNaN(dataset.sampleVariance())
              ? "None"
              : dataset.sampleVariance()}
          </Td>
        </Tr>
        <Tr>
          <Td>Sample Standard Deviation</Td>
          <Td>
            {isNaN(dataset.sampleStdev()) ? "None" : dataset.sampleStdev()}
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default GeneralInfo;
