export * from "./data";

export const toArray = <T>(value: unknown): T[] =>
  Array.isArray(value) ? value : [value];
