import { FC } from "react";
import "./ChevronButton.css";

// NOTE: chevron style was taken from https://codepen.io/stepher/pen/yLOaEOP

export const ChevronButton: FC<{ on: boolean; onClick: () => void }> = ({
  on,
  onClick,
}) => {
  return (
    <button
      aria-label="expand/collapse"
      className={`ChevronButton ${on ? "is-top" : "is-bottom"}`}
      onClick={onClick}
    />
  );
};
