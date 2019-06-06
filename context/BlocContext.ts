import { createContext } from "react";
import { ClockBloc } from "../bloc/ClockBloc";
import { CounterBloc } from "../bloc/CounterBloc";

export interface BlocContextValue {
  clockBloc: ClockBloc;
  counterBloc: CounterBloc;
}

export const BlocContext = createContext<Partial<BlocContextValue>>({
  clockBloc: undefined,
  counterBloc: undefined
});
