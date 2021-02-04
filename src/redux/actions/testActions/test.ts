import * as INT from "./types";

export const testAction = (payload: INT.ITestActionProps) => ({
  type: "TEST_ACTION",
  payload,
});
