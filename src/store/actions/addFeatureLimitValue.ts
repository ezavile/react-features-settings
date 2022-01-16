import { Dispatch } from "react";
import { AppAction } from "..";

export function addFeatureLimitValue(
  dispatch: Dispatch<AppAction>,
  payload: { value: number } & AppAction["payload"]
) {
  dispatch({ type: "ADD_FEATURE_LIMIT_VALUE", payload });
}
