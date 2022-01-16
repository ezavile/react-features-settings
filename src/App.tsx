import { FC, useState } from "react";

import { Switch, FeatureName, NumericInput, ChevronButton, Card } from "./Atoms";

export const App: FC = () => {
  const [on, setOn] = useState(false);

  return (
    <div className="App">
      <Card>
        <Switch on={on} onChange={() => setOn(!on)} />
        <FeatureName name={"notifications"} />
        <NumericInput />
        <ChevronButton on={on} onClick={() => setOn(!on)} />
      </Card>
    </div>
  );
};
