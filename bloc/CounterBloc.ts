import { Bloc, BlocAction } from "@bloc-js/bloc";
import { blocGetter, useBloc, useBlocState } from "@bloc-js/react-bloc";

// This function can be used in getInitialProps to init / retrieve a bloc.
export const getCounterBloc = blocGetter<number>(
  "counter",
  (initialState) => new CounterBloc(initialState),
);

// These hooks can be used in our components.
export const useCounterBloc = () => useBloc<number>(getCounterBloc);
export const useCounterBlocState = () => useBlocState(useCounterBloc());

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
