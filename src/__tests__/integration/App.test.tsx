import * as React from 'react';
import {
  renderIntoDocument as render,
  cleanup,
  fireEvent,
} from 'react-testing-library';

import { App } from '../../App';

const getText = (node: HTMLElement) => node.textContent || '';

afterEach(() => cleanup());

test('should display default state', () => {
  const { getByTestId } = render(<App />);
  const text = getText(getByTestId('value'));
  expect(text.includes('0')).toBe(true);
});

test('should change state correctly after clicking on increment button', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('button-increment'));
  const text = getText(getByTestId('value'));
  expect(text.includes('1')).toBe(true);
});

test('should change state correctly after clicking on decrement button', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('button-decrement'));
  const text = getText(getByTestId('value'));
  expect(text.includes('-1')).toBe(true);
});

test('should change state correctly after setting change value and clicking increment button', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input') as HTMLInputElement;
  input.value = '10';
  fireEvent.change(input);
  fireEvent.click(getByTestId('button-increment'));
  const text = getText(getByTestId('value'));
  expect(text.includes('10')).toBe(true);
});

test('should change state correctly after setting change value and clicking decrement button', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input') as HTMLInputElement;
  input.value = '10';
  fireEvent.change(input);
  fireEvent.click(getByTestId('button-decrement'));
  const text = getText(getByTestId('value'));
  expect(text.includes('-10')).toBe(true);
});
