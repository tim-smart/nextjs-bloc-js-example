import { Bloc } from "@bloc-js/bloc";

export interface ClockState {
  light: boolean;
  ts: number;
}

export class ClockBloc extends Bloc<ClockState> {
  constructor(initialState: ClockState = { light: true, ts: 0 }) {
    super(initialState);
  }

  public tick() {
    this.next({
      ...this.value,
      ts: Date.now(),
      light: true
    });
  }
  public init = this.tick;

  public serverInit() {
    this.next({
      ...this.value,
      ts: Date.now(),
      light: false
    });
  }
}
