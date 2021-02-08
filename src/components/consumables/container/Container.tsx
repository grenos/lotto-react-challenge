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
  type,
  place,
  customStyles,
  extraClass,
}): JSX.Element => {
  return (
    <div
      className={`${
        extraClass ? extraClass : ""
      } container __${place} --${type}`}
      data-test="container-consumable"
      style={{ ...customStyles }}
    >
      {children}
    </div>
  );
};

export default UNContainer;
