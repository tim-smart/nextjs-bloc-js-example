import { useBlocState } from "@bloc-js/react-bloc";
import React, { FC, useContext } from "react";
import { BlocContext, BlocContextValue } from "../context/BlocContext";

export const Counter: FC = () => {
  const { counterBloc } = useContext(BlocContext) as BlocContextValue;
  const count = useBlocState(counterBloc);

  const increment = () => counterBloc.dispatch("increment");
  const decrement = () => counterBloc.dispatch("decrement");
  const reset = () => counterBloc.dispatch("reset");

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
