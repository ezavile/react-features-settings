import { screen, render, fireEvent } from '@testing-library/react';
import { Switch } from './Switch';

describe('Switch', () => {
  let onChangeFn: jest.Mock;

  beforeEach(() => {
    onChangeFn = jest.fn();
  })

  it('marks as checked when it is on', () => {
    render(<Switch on onChange={onChangeFn} />);

    const input = screen.getByTestId("switch");
    expect(input).toHaveAttribute('checked', "");
  });

  it('marks as unchecked when it is off', () => {
    render(<Switch on={false} onChange={onChangeFn} />);

    const input = screen.getByTestId("switch");
    expect(input).not.toHaveAttribute('checked');
  });

  it('calls "onChangeFn" when switch is clicked', () => {
    render(<Switch on onChange={onChangeFn} />);

    fireEvent.click(screen.getByTestId("switch"));
    expect(onChangeFn).toHaveBeenCalled();
  });
});
