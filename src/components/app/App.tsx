import React from "react";
import { connect } from "react-redux";
import * as INT from "./types";
import { testAction } from "../../redux/actions/testActions/test";
// Components
import { Container } from "../consumables";
import { InfoBox } from "../../components";

const customStylesContainer = {
  border: "2px red solid",
  minWidth: "600px",
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
  return (
    <div className="app" data-test="app-component">
      <Container type="leadingVertical" place="app">
        <InfoBox />
        <div style={{ height: 500, width: 600 }}></div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    testState: state.testReducer.test,
  };
};

export default connect(mapStateToProps, { testAction })(UNCApp);

{
  /* <Button type="success" action={() => testAction(true)}>
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
</Button> */
}

{
  /* <Header type="l" bold>
This is a header component
</Header>

<Text type="xs">This is a text component</Text>

<div style={{ display: "flex" }}>
{testState ? <p>Test State is TRUE</p> : <p>Test State is FALSE</p>}
</div> */
}
