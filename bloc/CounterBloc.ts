import { Bloc } from "@bloc-js/bloc";

export class CounterBloc extends Bloc<number> {
  constructor(initialState = 0) {
    super(initialState);
  }

  public increment() {
    this.next(this.value + 1);
  }

  public decrement() {
    this.next(this.value - 1);
  }

  public reset() {
    this.next(0);
  }
}
