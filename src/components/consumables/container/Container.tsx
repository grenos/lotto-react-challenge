import React from "react";
import * as INT from "./types";

/**
 * UNContainer Component
 *
 * @function
 * @return {JSX.Element}
 */
export const UNContainer: React.FC<INT.IContainerProps> = ({
  children,
  backgroundcolor,
  type,
  margin,
  padding,
  customStyles,
}): JSX.Element => {
  return (
    <div
      className={`container --${type}`}
      data-test="container-consumable"
      style={{
        backgroundColor: backgroundcolor,
        margin: margin,
        padding: padding,
        ...customStyles,
      }}
    >
      {children}
    </div>
  );
};

export default UNContainer;
