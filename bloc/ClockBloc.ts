import { Bloc, BlocAction } from "@bloc-js/bloc";
import { blocGetter, useBloc, useBlocState } from "@bloc-js/react-bloc";

// This function can be used in getInitialProps to init / retrieve a ClockBloc
export const getClockBloc = blocGetter<ClockState>(
  "clock",
  (initialState) => new ClockBloc(initialState),
);

// These hooks make using the bloc in components easier
export const useClockBloc = () => useBloc(getClockBloc);
export const useClockBlocState = () => useBlocState(useClockBloc());

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
