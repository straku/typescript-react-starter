import * as React from 'react';
import styled from 'styled-components';

import { reducer, getInitialState, StateType } from './reducer';
import { ActionType, ThunkType } from './actions';

import { Controls } from './components/Controls';

class App extends React.Component<{}, StateType> {
  state = getInitialState();

  dispatch = (action: ActionType | ThunkType) => {
    if (typeof action === 'function') {
      action(this.dispatch, this.state);
    } else {
      this.setState(prevState => reducer(prevState, action));
    }
  };

  render() {
    return (
      <AppElem>
        <Value>value: {this.state.value}</Value>
        <Controls dispatch={this.dispatch} />
      </AppElem>
    );
  }
}

const AppElem = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Value = styled.span`
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 1em;
`;

export default App;
