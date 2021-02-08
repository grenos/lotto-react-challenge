import React from "react";
import { connect } from "react-redux";
import * as INT from "./types";
// Components
import { Container, Text } from "../consumables";

const customStylesText = {
  paddingLeft: "20px",
} as { [key: string]: React.CSSProperties };

/**
 * UNCInfoBox Component
 *
 *
 * @function
 * @param {} testState - Boolean
 * @return {JSX.Element}
 */
export const UNCInfoBox: React.FC<INT.IInfoBoxProps> = ({
  testState,
}): JSX.Element => {
  return (
    // <div className="infoBox" data-test="infoBox-component">
    <Container type="leadingHorizontal" place="infoBox" extraClass="infoBox">
      <Text type="xs" customStyles={{ ...customStylesText }}>
        This is a test error message
      </Text>
    </Container>
    // </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    testState: state.testReducer.test,
  };
};

export default connect(mapStateToProps, null)(UNCInfoBox);
