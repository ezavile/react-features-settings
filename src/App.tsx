import { FC, useState } from "react";
import { Switch } from "./Atoms";

export const App: FC = () => {
  const [on, setOn] = useState(false);

  return (
    <div className="App">
      <Switch on={on} onChange={() => setOn(!on)} />
    </div>
  );
};
