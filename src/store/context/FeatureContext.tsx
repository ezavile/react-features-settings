import { createContext, ReactNode, useContext, useReducer } from "react";

import { AppState, AppDispatch } from "../models";
import { featureReducer } from "../reducers";
import { initialState } from "../initial-state-data";

type FeatureContextParams =
  | { state: AppState; dispatch: AppDispatch }
  | undefined;

const FeatureContext = createContext<FeatureContextParams>(undefined);
FeatureContext.displayName = "FeatureContext";

function FeatureProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(featureReducer, initialState);

  return (
    <FeatureContext.Provider value={{ state, dispatch }}>
      {children}
    </FeatureContext.Provider>
  );
}

function useFeatureContext() {
  const context = useContext(FeatureContext);

  if (context === undefined) {
    throw new Error("useFeatureContext must be used within a FeatureProvider");
  }

  return context;
}

export { FeatureProvider, useFeatureContext };
