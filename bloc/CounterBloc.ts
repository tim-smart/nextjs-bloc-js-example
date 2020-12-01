import { Bloc, BlocAction } from "@bloc-js/bloc";
import { createHooks } from "@bloc-js/react-bloc";

export const { getBloc, useBloc, useState } = createHooks<number>(
  "counter",
  (initialState) => new CounterBloc(initialState)
);

// Define the bloc actions
type Action = BlocAction<number>;
export const increment: Action = (b, next) => next(b.value + 1);
export const decrement: Action = (b, next) => next(b.value - 1);
export const reset: Action = (_, next) => next(0);

// Define the bloc class
export class CounterBloc extends Bloc<number> {
  constructor(initialState = 0) {
    super(initialState);
  }
}
