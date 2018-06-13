import * as React from 'react';
import styled, { css } from 'styled-components';

import { increment, decrement, DispatchType } from '../actions';

type PropsType = {
  dispatch: DispatchType;
};

type StateType = {
  value: number;
};

export class Controls extends React.Component<PropsType, StateType> {
  state = {
    value: 1,
  };

  handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ value: Number(e.currentTarget.value) });
  };

  render() {
    const { dispatch } = this.props;
    const { value } = this.state;
    return (
      <ControlsElem>
        <Label>
          Change value by:
          <Input value={value} onChange={this.handleChange} />
        </Label>
        <Button onClick={() => dispatch(increment(value))}>{'+'}</Button>
        <Button onClick={() => dispatch(decrement(value))}>{'-'}</Button>
      </ControlsElem>
    );
  }
}

const ControlsElem = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin: 5px;
  }
`;

const Label = styled.label`
  font-size: 0.8em;
`;

const border = css`
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 4px;
`;

const Input = styled.input.attrs({ type: 'number' })`
  margin-left: 5px;
  ${border};
`;

const Button = styled.button`
  background-color: white;
  ${border};
`;
