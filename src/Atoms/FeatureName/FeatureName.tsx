import { FC } from "react";
import "./FeatureName.css";

export const FeatureName: FC<{ name: string; imageUrl?: string }> = ({
  name,
  imageUrl,
}) => (
  <div className="FeatureName">
    <div
      data-testid="feature-name-image"
      className="FeatureName-image"
      style={{ ...(imageUrl && { backgroundImage: `url(${imageUrl})` }) }}
    />
    <span className="FeatureName-name">{name}</span>
  </div>
);
