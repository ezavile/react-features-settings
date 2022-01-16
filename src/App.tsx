import { FC } from "react";
import { GroupFeatures } from "./Organisms";
import { useFeatureContext } from "./store";

export const App: FC<{}> = () => {
  const { state } = useFeatureContext();

  return (
    <>
      {Object.keys(state).map((groupKey) => {
        const group = state[groupKey];

        return <GroupFeatures key={group.id} {...group} />;
      })}
    </>
  );
};
