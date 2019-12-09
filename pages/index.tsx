import { useBlocState } from "@bloc-js/react-bloc";
import { NextComponentType } from "next";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { Examples } from "../components/Examples";
import { BlocContext, BlocContextValue } from "../context/BlocContext";

const Index: NextComponentType = () => {
  // `as BlocContextValue` is used to reverse the effects of
  // Partial<BlocContextValue>.
  const { clockBloc } = useContext(BlocContext) as BlocContextValue;
  const state = useBlocState(clockBloc);

  useEffect(() => {
    const timer = setInterval(() => {
      clockBloc.tick();
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <Examples ts={state.ts} light={state.light} />
      <br />
      <Link href="/about">
        <a>About page</a>
      </Link>
    </div>
  );
};

Index.getInitialProps = async ({ clockBloc, req }) => {
  const isServer = !!req;

  // `serverInit` event will make the background dark, which will be replaced
  // with a light background when the client kicks in.
  if (isServer) {
    await clockBloc.serverInit();
  } else {
    await clockBloc.init();
  }

  return {};
};

export default Index;
