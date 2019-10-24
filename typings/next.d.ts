import "next";
import { BlocContextValue } from "../context/BlocContext";

// This adds our blocs to the getInitialProps context
declare module "next" {
  export interface NextPageContext extends BlocContextValue {}
}
