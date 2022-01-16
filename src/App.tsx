import { FC, useState } from "react";

import { Card } from "./Atoms";
import { FeatureToggle } from "./Molecules";

export const App: FC = () => {
  const [on, setOn] = useState(false);

  return (
    <div className="App">
      <Card>
        <FeatureToggle
          name={"notifications"}
          enabled={on}
          onToggle={() => setOn(!on)}
          onLimitValueChange={() => {}}
        />
      </Card>
    </div>
  );
};
