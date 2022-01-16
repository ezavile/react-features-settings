import { FC } from "react";
import "./Card.css";

export const Card: FC<{}> = ({ children }) => (
  <div className="Card">{children}</div>
);
