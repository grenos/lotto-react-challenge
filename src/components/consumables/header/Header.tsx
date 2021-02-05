import React from "react";
import * as INT from "./types";

/**
 * UNCHeader Component
 *
 * @function
 * @return {JSX.Element}
 */
export const UNCHeader: React.FC<INT.IHeaderProps> = ({
  children,
  type,
  bold,
  customStyles,
}): JSX.Element => {
  return (
    <h2
      className={`header --${type} --${bold ? "bold" : ""}`}
      data-test="header-consumable"
      style={{ ...customStyles }}
    >
      {children}
    </h2>
  );
};

export default UNCHeader;
