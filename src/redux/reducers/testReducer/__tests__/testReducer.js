import { storeFactory } from "../../../../helpers/testUtils";
import { testAction } from "../../../actions/testActions/test";

test("should pass data", () => {
  const initialState = {};
  const store = storeFactory(initialState);

  store.dispatch(testAction(true));
  const newState = store.getState().testReducer;
  const expectedState = {
    ...initialState,
    test: true,
  };
  expect(newState).toEqual(expectedState);
});
