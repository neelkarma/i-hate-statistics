import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FourOhFour: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return <></>;
};

export default FourOhFour;
