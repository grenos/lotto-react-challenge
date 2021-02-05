import React from "react";
import { connect } from "react-redux";
import * as INT from "./types";
import { testAction } from "../../redux/actions/testActions/test";
// Components
import { UNCButton as Button } from "../consumables/button/Button";
import { UNContainer as Container } from "../consumables/container/Container";
import { UNCHeader as Header } from "../consumables/header/Header";

const customStylesContainer = {
  border: "2px red solid",
} as { [key: string]: React.CSSProperties };

const customStylesButton = {
  boxShadow: "5px 10px #888888",
} as { [key: string]: React.CSSProperties };

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
  const margin = "50px 0 50px";
  const padding = "20px 40px 20px";

  return (
    <div className="test-class" data-test="app-component">
      <Container
        type="centerHorizontal"
        margin={margin}
        padding={padding}
        customStyles={{ ...customStylesContainer }}
      >
        <Button type="success" action={() => testAction(true)}>
          Set True
        </Button>
        <Button
          type="primary"
          action={() => testAction(false)}
          customStyles={{ ...customStylesButton }}
        >
          Set False
        </Button>
        <Button type="clear" action={() => testAction(false)}>
          Clear All
        </Button>
      </Container>

      <Header type="l" bold>
        This is a header coponent
      </Header>

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
