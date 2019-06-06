import { createContext } from "react";
import { ClockBloc } from "../bloc/ClockBloc";
import { CounterBloc } from "../bloc/CounterBloc";

// BlocContextValue is an interface that represents our global Bloc's
export interface BlocContextValue {
  clockBloc: ClockBloc;
  counterBloc: CounterBloc;
}

// A Partial type is used here so we don't have to initialize any default
// values. It will later be cast back to `BlocContextValue`.
export const BlocContext = createContext<Partial<BlocContextValue>>({
  clockBloc: undefined,
  counterBloc: undefined
});
