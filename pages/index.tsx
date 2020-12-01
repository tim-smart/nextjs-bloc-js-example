import "@bloc-js/nextjs-bloc";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import * as Clock  from "../bloc/ClockBloc";
import { Examples } from "../components/Examples";

const Index: NextPage = () => {
  // `as BlocContextValue` is used to reverse the effects of
  // Partial<BlocContextValue>.
  const clockBloc = Clock.useBloc();
  const state = Clock.useState();

  useEffect(() => {
    const timer = setInterval(() => {
      clockBloc.next(Clock.tick);
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

Index.getInitialProps = async ({ blocRegistry, req }) => {
  const isServer = !!req;
  const bloc = Clock.getBloc(blocRegistry);

  // `serverInit` event will make the background dark, which will be replaced
  // with a light background when the client kicks in.
  await bloc.next(isServer ? Clock.serverInit : Clock.tick);

  return {};
};

export default Index;
