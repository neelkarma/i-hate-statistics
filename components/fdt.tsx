import type { FC } from "react";
import { Table, Tbody, Tr, Td, Thead, Th, Text } from "@chakra-ui/react";
import type { Dataset } from "../lib/dataset";

const FDT: FC<{ dataset: Dataset }> = ({ dataset }) => {
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>
              Score (<em>x</em>)
            </Th>
            <Th>
              Frequency (<em>f</em>)
            </Th>
            <Th>
              <em>fx</em>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {dataset.unique.map((x, i) => {
            const f = dataset.count(x);
            return (
              <Tr key={i}>
                <Td>{x}</Td>
                <Td>{f}</Td>
                <Td>{f * x}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Text>
        Sum of <em>f</em>:{" "}
        {dataset.unique.map((x) => dataset.count(x)).reduce((a, b) => a + b, 0)}
      </Text>
      <Text>
        Sum of <em>fx</em>:{" "}
        {dataset.unique
          .map((x) => dataset.count(x) * x)
          .reduce((a, b) => a + b, 0)}
      </Text>
    </>
  );
};

export default FDT;
