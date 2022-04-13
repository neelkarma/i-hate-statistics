import type { FC } from "react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  Thead,
  Th,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import type { Dataset } from "../lib/dataset";

interface CFDTProps {
  dataset: Dataset;
}

const CFDT: FC<CFDTProps> = ({ dataset }) => {
  let cf = 0;
  return (
    <VStack align="left">
      <Box overflowX="auto">
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
              <Th>
                Cumulative Frequency (<em>c.f.</em>)
              </Th>
              <Th>
                Cumulative Percentage (<em>c.p.</em>)
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataset.unique.map((x, i) => {
              const f = dataset.count(x);
              cf += f;
              return (
                <Tr key={i} fontFamily="mono">
                  <Td>{x}</Td>
                  <Td>{f}</Td>
                  <Td>{f * x}</Td>
                  <Td>{cf}</Td>
                  <Td>{(cf / dataset.data.length) * 100} %</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
      <Text fontFamily="mono">
        sum(f) ={" "}
        {dataset.unique.map((x) => dataset.count(x)).reduce((a, b) => a + b, 0)}
      </Text>
      <Text fontFamily="mono">
        sum(fx) ={" "}
        {dataset.unique
          .map((x) => dataset.count(x) * x)
          .reduce((a, b) => a + b, 0)}
      </Text>
    </VStack>
  );
};

export default CFDT;
