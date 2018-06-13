import { StateType } from './types';

export type DispatchType = (action: ActionType | ThunkType) => void;
export type ThunkType = (dispatch: DispatchType, state: StateType) => void;

export type ActionType =
  | { type: 'INCREMENT'; value: number }
  | { type: 'DECREMENT'; value: number };

export const increment = (value: number = 1): ActionType => ({
  type: 'INCREMENT',
  value,
});

export const decrement = (value: number = 1): ActionType => ({
  type: 'DECREMENT',
  value,
});
