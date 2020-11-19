import "@bloc-js/nextjs-bloc";
import { useBlocState } from "@bloc-js/react-bloc";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  getClockBloc,
  serverInit,
  tick,
  useClockBloc,
} from "../bloc/ClockBloc";
import { Examples } from "../components/Examples";

const Index: NextPage = () => {
  // `as BlocContextValue` is used to reverse the effects of
  // Partial<BlocContextValue>.
  const clockBloc = useClockBloc();
  const state = useBlocState(clockBloc);

  useEffect(() => {
    const timer = setInterval(() => {
      clockBloc.next(tick);
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
  const bloc = getClockBloc(blocRegistry);

  // `serverInit` event will make the background dark, which will be replaced
  // with a light background when the client kicks in.
  await bloc.next(isServer ? serverInit : tick);

  return {};
};

export default Index;
