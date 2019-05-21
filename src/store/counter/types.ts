export type CounterState = {
  count: number;
};

export const Increment = "Increment" as const;
export const Decrement = "Decrement" as const;

export type Actions = typeof Increment | typeof Decrement;
