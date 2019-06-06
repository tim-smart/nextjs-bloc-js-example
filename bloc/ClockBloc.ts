import { Bloc } from "@bloc-js/bloc";

export type ClockEvent = "tick" | "init" | "serverInit";

export interface ClockState {
  light: boolean;
  ts: number;
}

export class ClockBloc extends Bloc<ClockEvent, ClockState> {
  constructor(
    initialState: ClockState = {
      light: true,
      ts: 0
    }
  ) {
    super(initialState);
  }

  async *mapEventToState(event: ClockEvent): AsyncIterableIterator<ClockState> {
    if (event === "tick") {
      yield {
        ...this.currentState,
        ts: Date.now(),
        light: true
      };
    } else if (event === "init") {
      yield {
        ...this.currentState,
        ts: Date.now(),
        light: true
      };
    } else if (event === "serverInit") {
      const state = {
        ...this.currentState,
        ts: Date.now(),
        light: false
      };
      yield state;
    }
  }
}
