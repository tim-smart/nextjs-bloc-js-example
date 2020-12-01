import { Bloc, BlocAction } from "@bloc-js/bloc";
import { createHooks } from "@bloc-js/react-bloc";

export const { getBloc, useBloc, useState } = createHooks<ClockState>(
  "clock",
  (initialState) => new ClockBloc(initialState)
);

// Define what the state looks like
export interface ClockState {
  light: boolean;
  ts: number;
}

// Define the different actions for the bloc
type Action = BlocAction<ClockState>;
export const tick: Action = (b, next) =>
  next({
    ...b.value,
    ts: Date.now(),
    light: true,
  });
export const serverInit: Action = (b, next) =>
  next({
    ...b.value,
    ts: Date.now(),
    light: false,
  });

// Define the bloc class
export class ClockBloc extends Bloc<ClockState> {
  constructor(initialState: ClockState = { light: true, ts: 0 }) {
    super(initialState);
  }
}
