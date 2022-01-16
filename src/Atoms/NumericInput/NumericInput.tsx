import { FC, ComponentPropsWithoutRef } from "react";

import "./NumericInput.css";

export type NumericInputProps = ComponentPropsWithoutRef<"input">;

export const NumericInput: FC<NumericInputProps> = ({
  value,
  onChange,
  ...props
}) => (
  <input
    {...props}
    aria-label="numeric-input"
    data-testid="numeric-input"
    className="NumericInput"
    type="number"
    min="1"
    value={value}
    onChange={onChange}
  />
);
