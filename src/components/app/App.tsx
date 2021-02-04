import React from "react";
import { connect } from "react-redux";
import * as INT from "./types";
import { testAction } from "../../redux/actions/testActions/test";

/**
 * App Component
 *
 * renders rest of components
 *
 * @function
 * @param {} testState - Boolean
 * @return {JSX.Element}
 */
export const UNCApp: React.FC<INT.IAppProps> = ({
  testState,
  testAction,
}): JSX.Element => {
  return (
    <div className="test-class" data-test="app-component">
      <button onClick={() => testAction(true)}>Set True</button>
      <button onClick={() => testAction(false)}>Set False</button>
      <div style={{ display: "flex" }}>
        {testState ? <p>Test State is TRUE</p> : <p>Test State is FALSE</p>}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    testState: state.testReducer.test,
  };
};

export default connect(mapStateToProps, { testAction })(UNCApp);
