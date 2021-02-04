import { TEST_STATE } from "./testState";

/**
 * testReducer
 *
 * @function, testReducer
 * @param {array} TEST_STATE - State before reducer.
 * @param {object} action - action to be reduced.
 *
 * @default TEST_STATE
 */
export default function testReducer(state = TEST_STATE, action: any) {
  switch (action.type) {
    case "TEST_ACTION":
      return {
        ...state,
        test: action.payload,
      };

    default: {
      return state;
    }
  }
}
