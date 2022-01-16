import { GroupFeatures } from "./GroupFeatures";

export type AppState = { [key: string]: GroupFeatures };

export type AppAction =
  | {
      type: "TOGGLE_FEATURE";
      payload: {
        groupId: string;
        featureId: string;
        itemId?: string;
      };
    }
  | {
      type: "ADD_FEATURE_LIMIT_VALUE";
      payload: {
        groupId: string;
        featureId: string;
        itemId?: string;
        value: number;
      };
    };

export type AppDispatch = (action: AppAction) => void;
