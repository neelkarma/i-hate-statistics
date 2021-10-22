import type { NextPage } from "next";
import {
  Grid,
  Center,
  Input,
  VStack,
  Heading,
  Divider,
  Switch,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Dataset } from "../lib/dataset";
import FivePointSummary from "../components/fivepointsummary";
import GeneralInfo from "../components/generalinfo";
import FDT from "../components/fdt";
import CFDT from "../components/cfdt";
import Head from "next/head";

const Home: NextPage = () => {
  const [dataset, setDataset] = useState<Dataset | null>(null);
  const [input, setInput] = useState("");
  const [isCumulative, setIsCumulative] = useState(false);

  useEffect(() => {
    if (!input.length) return setDataset(null);
    setDataset(
      new Dataset(
        input
          .split(/[\s,]+/)
          .filter((val) => val.length)
          .map((val) => Number(val))
      )
    );
  }, [input]);

  return (
    <VStack h="90vh" mx="10" mt="5">
      <Head>
        <title>Fuck Statistics</title>
      </Head>
      <Input
        placeholder="Input the dataset here"
        mb={5}
        onChange={(e) => setInput(e.target.value)}
      />
      {dataset ? (
        dataset.data.some(isNaN) ? (
          <Grid h="100%">
            <Center>
              <Heading color="gray.600" textAlign="center">
                Perhaps I should've been more clear - when I say "dataset" I
                mean <em>numbers separated by whitespace and/or commas</em>, not
                whatever you just used.
              </Heading>
            </Center>
          </Grid>
        ) : (
          <>
            <Heading pb={5}>5-Point Summary</Heading>
            <FivePointSummary dataset={dataset} />
            <Divider pt={5} />
            <Heading py={5}>General Info</Heading>
            <GeneralInfo dataset={dataset} />
            <Divider pt={5} />
            <Heading py={5}>Frequency Distribution Table</Heading>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="cumulativeSwitch" mb="0">
                Cumulative?
              </FormLabel>
              <Switch
                id="cumulativeSwitch"
                onChange={(e) => setIsCumulative(e.target.checked)}
              />
            </FormControl>
            {isCumulative ? (
              <CFDT dataset={dataset} />
            ) : (
              <FDT dataset={dataset} />
            )}
          </>
        )
      ) : (
        <Grid h="100%">
          <Center>
            <Heading color="gray.600" textAlign="center">
              Input some data above to get started.
            </Heading>
          </Center>
        </Grid>
      )}
    </VStack>
  );
};

export default Home;
