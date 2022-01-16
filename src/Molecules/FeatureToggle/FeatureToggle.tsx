import { FC } from "react";
import "./FeatureToggle.css";

import { FeatureName, NumericInput, Switch } from "../../Atoms";
import { Feature } from "../../store";

type FeatureToggleProps = Pick<Feature, 'name' | 'enabled' | 'value'> & {
  onToggle: () => void;
  onLimitValueChange: (value: number) => void;
};

export const FeatureToggle: FC<FeatureToggleProps> = ({
  name,
  enabled,
  value,
  onLimitValueChange,
  onToggle,
}) => {
  return (
    <div className="FeatureToggle">
      <FeatureName name={name} />
      <div className="FeatureToggle-switch">
        {typeof value !== "undefined" ? (
          <NumericInput
            value={value}
            onChange={(ev) => onLimitValueChange(+ev.target.value)}
          />
        ) : null}
        <Switch on={enabled} onChange={onToggle} />
      </div>
    </div>
  );
};
