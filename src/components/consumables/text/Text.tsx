import React from "react";
import * as INT from "./types";

/**
 * UNCText Component
 *
 * @function
 * @return {JSX.Element}
 */
export const UNCText: React.FC<INT.ITextProps> = ({
  children,
  type,
  bold,
  customStyles,
}): JSX.Element => {
  return (
    <h2
      className={`text --${type} --${bold ? "bold" : ""}`}
      data-test="text-consumable"
      style={{ ...customStyles }}
    >
      {children}
    </h2>
  );
};

export default UNCText;
