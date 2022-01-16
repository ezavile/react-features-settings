import { FC } from "react";
import "./GroupFeatures.css";

import { GroupFeatures as GroupFeaturesProps } from "../../store";
import { FeatureCard } from "../FeatureCard";

export const GroupFeatures: FC<GroupFeaturesProps> = ({
  id,
  name,
  features,
}) => {
  return (
    <div className="GroupFeatures">
      <h2 className="GroupFeatures-title" data-testid="group-title">
        {name}
      </h2>
      {Object.keys(features).map((key) => {
        const feature = features[key];

        return (
          <ul
            className="GroupFeatures-item"
            key={feature.id}
            aria-label="features"
          >
            <li>
              <FeatureCard groupId={id} {...feature} />
            </li>
          </ul>
        );
      })}
    </div>
  );
};
