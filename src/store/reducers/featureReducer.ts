import produce from "immer";

import { AppAction, AppState } from "../models";

export function featureReducer(state: AppState, action: AppAction): AppState {
  const { groupId, featureId, itemId } = action.payload;

  const newState = produce(state, (draft) => {
    const feature = draft[groupId].features[featureId];
    const featureItem = feature.features[itemId || ""];

    if (action.type === "TOGGLE_FEATURE") {
      if (featureItem) {
        featureItem.enabled = !featureItem.enabled;
      } else {
        feature.enabled = !feature.enabled;

        // NOTE: disable internal features
        if (!feature.enabled) {
          Object.keys(feature.features).forEach((itemKey) => {
            feature.features[itemKey].enabled = false;
          });
        }
      }
    }

    if (action.type === "ADD_FEATURE_LIMIT_VALUE") {
      const { value } = action.payload;

      if (featureItem) {
        featureItem.value = value;
      } else {
        feature.value = value;
      }
    }
  });

  return newState;
}
