import { initializeRegistry } from "@bloc-js/nextjs-bloc";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import * as Clock from "../bloc/ClockBloc";
import { Examples } from "../components/Examples";

const Index: NextPage = () => {
  const clockBloc = Clock.useBloc();
  const state = Clock.useState();

  useEffect(() => {
    const timer = setInterval(() => {
      clockBloc.next(Clock.tick);
    }, 1000);
    return () => clearInterval(timer);
  }, [clockBloc]);

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

export async function getServerSideProps() {
  const r = initializeRegistry();
  // `serverInit` event will make the background dark, which will be replaced
  // with a light background when the client kicks in.
  await Clock.getBloc(r).next(Clock.serverInit);
  return { props: { initialBlocState: r.getState() } };
}

export default Index;
