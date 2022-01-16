import { Dispatch } from "react";
import { AppAction } from "..";

export function toggleFeature(
  dispatch: Dispatch<AppAction>,
  payload: AppAction["payload"]
) {
  dispatch({ type: "TOGGLE_FEATURE", payload });
}
