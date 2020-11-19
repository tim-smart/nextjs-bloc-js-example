import { wrapper } from "@bloc-js/nextjs-bloc";
import App, { AppProps } from "next/app";
import React from "react";

const BlocExampleApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

BlocExampleApp.getInitialProps = App.getInitialProps;

export default wrapper(BlocExampleApp);
