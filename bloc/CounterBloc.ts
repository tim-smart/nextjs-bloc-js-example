import { Bloc } from "@bloc-js/bloc";

export type CounterEvent = "increment" | "decrement" | "reset";

export class CounterBloc extends Bloc<CounterEvent, number> {
  constructor(initialState = 0) {
    super(initialState);
  }

  async *mapEventToState(event: CounterEvent) {
    if (event === "increment") {
      yield this.currentState + 1;
    } else if (event === "decrement") {
      yield this.currentState - 1;
    } else if (event === "reset") {
      yield 0;
    }
  }
}
