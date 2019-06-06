import { FC } from "react";
import Clock from "./Clock";
import { Counter } from "./Counter";

export interface ExamplesProps {
  ts: number;
  light: boolean;
}

export const Examples: FC<ExamplesProps> = ({ ts, light }) => (
  <div>
    <Clock lastUpdate={ts} light={light} />
    <Counter />
  </div>
);
