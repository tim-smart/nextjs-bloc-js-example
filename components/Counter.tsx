import React, { FC } from "react";
import * as C from "../bloc/CounterBloc";

export const Counter: FC = () => {
  const bloc = C.useBloc();
  const count = C.useState();

  const decrement = () => bloc.next(C.decrement);
  const increment = () => bloc.next(C.increment);
  const reset = () => bloc.next(C.reset);

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
