import { FC } from "react";
import "./Switch.css";

// NOTE: switch style was taken from https://www.w3schools.com/howto/howto_css_switch.asp

type SwitchProps = { on: boolean; onChange: () => void };

export const Switch: FC<SwitchProps> = ({ on, onChange }) => (
  <label className="Switch">
    <input
      data-testid="switch"
      placeholder="switch"
      type="checkbox"
      checked={on}
      onChange={onChange}
    />
    <span className="Slider"></span>
  </label>
);
