import { JSX, lazy } from "solid-js";

export const Index: Record<
  string,
  {
    component?: any;
    files: string[];
  }
> = {
  button: {
    // component: () => lazy(() => import("../demos/button")),
    files: ["/button"],
  },
};
