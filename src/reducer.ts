import produce from 'immer';

import { StateType } from './types';
import { ActionType } from './actions';

const assertNever = (x: never): never => {
  throw new Error(`Unexpected action: ${x}`);
};

export const getInitialState = (): StateType => ({
  value: 0,
});

export const reducer = (state: StateType, action: ActionType): StateType => {
  const newState = produce(state, draft => {
    switch (action.type) {
      case 'INCREMENT': {
        draft.value += action.value;
        break;
      }
      case 'DECREMENT': {
        draft.value -= action.value;
        break;
      }
      default:
        assertNever(action);
    }
  });

  // basic logging for dev purposes
  if (process.env.NODE_ENV === 'development') {
    console.log(action);
    (<any>global).state = newState;
  }

  return newState;
};

export { StateType };
