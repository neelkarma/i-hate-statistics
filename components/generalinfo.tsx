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
        <Tr>
          <Td>Variance</Td>
          <Td>{dataset.variance()}</Td>
        </Tr>
        <Tr>
          <Td>Standard Deviation</Td>
          <Td>{dataset.stdev()}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default GeneralInfo;
