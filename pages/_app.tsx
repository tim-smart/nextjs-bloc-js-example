import { useRegistry } from "@bloc-js/nextjs-bloc";
import { BlocRoot } from "@bloc-js/react-bloc";
import { AppProps } from "next/app";
import React from "react";

const BlocExampleApp = ({ Component, pageProps }: AppProps) => {
  const r = useRegistry(pageProps.initialBlocState);

  return (
    <BlocRoot registry={r}>
      <Component {...pageProps} />
    </BlocRoot>
  );
};

export default BlocExampleApp;
