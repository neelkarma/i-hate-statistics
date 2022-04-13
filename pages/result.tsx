import type { NextPage } from "next";
import { Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Dataset } from "../lib/dataset";
import { FivePointSummary } from "../components/FivePointSummary";
import Head from "next/head";
import { useRouter } from "next/router";
import { ResultsView } from "../components/ResultsView";
import { BackButton } from "../components/BackButton";
import { CommonStats } from "../components/CommonStats";
import { LongStats } from "../components/LongStats";
import { VarianceStats } from "../components/VarianceStats";
import CFDT from "../components/CFDT";
import { FadeProvider } from "../components/FadeProvider";

const Result: NextPage = () => {
  const [dataset, setDataset] = useState<Dataset | null>(null);
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const input = params.get("input");
    if (!input) {
      router.push("/");
      return;
    }

    const queryDataset = Dataset.fromInput(input);
    if (!queryDataset.isValid()) {
      router.push("/");
      return;
    }

    setDataset(queryDataset);
  }, [router]);

  return (
    dataset && (
      <FadeProvider>
        <ResultsView>
          <Head>
            <title>Results | Fuck Statistics</title>
          </Head>
          <BackButton />
          <Divider />
          {/* Five Point Summary - Shown in BIG MONO TEXT */}
          <FivePointSummary dataset={dataset} />
          <Divider />
          {/* Other Common Statistics (Mean, Modes, Range, IQR)- Shown in simple grid */}
          <CommonStats dataset={dataset} />
          <Divider />
          {/* Long Statistics (Modes, Sorted Data) - Displayed in list format */}
          <LongStats dataset={dataset} />
          <Divider />
          {/* Population/Sample Statistics - Displayed in list format */}
          <VarianceStats dataset={dataset} />
          <Divider />
          {/* Frequency Distribution Table */}
          <CFDT dataset={dataset} />
        </ResultsView>
      </FadeProvider>
    )
  );
};

export default Result;
