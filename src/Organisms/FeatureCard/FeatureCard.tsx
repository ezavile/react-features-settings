import { FC, useEffect, useState } from "react";
import "./FeatureCard.css";

import { Card, ChevronButton } from "../../Atoms";
import { FeatureToggle } from "../../Molecules";
import {
  Feature,
  useFeatureContext,
  toggleFeature,
  addFeatureLimitValue,
} from "../../store";

type FeatureCardProps = { groupId: string } & Feature;

export const FeatureCard: FC<FeatureCardProps> = (props) => {
  const { dispatch } = useFeatureContext();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(props.enabled);
  }, [props.enabled]);

  const handleChevronClick = () => {
    setExpanded(!expanded);
  };

  const handleFeatureToggle = (itemId?: string) => {
    toggleFeature(dispatch, {
      groupId: props.groupId,
      featureId: props.id,
      itemId,
    });
  };

  const handleFeatureLimitValue = (value: number, itemId?: string) => {
    addFeatureLimitValue(dispatch, {
      groupId: props.groupId,
      featureId: props.id,
      itemId,
      value,
    });
  };

  const featuresKeys = Object.keys(props.features);
  const hasFeatureItems = featuresKeys.length > 0;

  return (
    <Card>
      <div className="FeatureCard-header">
        <FeatureToggle
          {...props}
          onToggle={handleFeatureToggle}
          onLimitValueChange={handleFeatureLimitValue}
        />
        {hasFeatureItems && (
          <ChevronButton on={expanded} onClick={handleChevronClick} />
        )}
      </div>
      {hasFeatureItems && expanded ? (
        <ul className="FeatureCard-list">
          {featuresKeys.map((featureKey) => {
            const feature = props.features[featureKey];

            return (
              <li className="FeatureCard-list-item" key={feature.id}>
                <FeatureToggle
                  {...feature}
                  onToggle={() => handleFeatureToggle(feature.id)}
                  onLimitValueChange={(value) =>
                    handleFeatureLimitValue(value, feature.id)
                  }
                />
              </li>
            );
          })}
        </ul>
      ) : null}
    </Card>
  );
};
