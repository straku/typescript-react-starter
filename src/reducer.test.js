import { reducer } from './reducer';
import { increment, decrement } from './actions';

test('increment action with value', () => {
  const state = { value: 0 };
  expect(reducer(state, increment(10))).toEqual({ value: 10 });
});

test('increment action with default value', () => {
  const state = { value: 0 };
  expect(reducer(state, increment())).toEqual({ value: 1 });
});

test('decrement action with value', () => {
  const state = { value: 0 };
  expect(reducer(state, decrement(10))).toEqual({ value: -10 });
});

test('decrement action with default value', () => {
  const state = { value: 0 };
  expect(reducer(state, decrement())).toEqual({ value: -1 });
});
