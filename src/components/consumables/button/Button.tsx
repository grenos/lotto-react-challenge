import React from "react";
import * as INT from "./types";

/**
 * Button Component
 *
 * @function
 * @return {JSX.Element}
 */
export const UNCButton: React.FC<INT.IButtonProps> = ({
  children,
  type,
  action,
  customStyles,
}): JSX.Element => {
  return (
    <button
      className={`button --${type}`}
      data-test="button-consumable"
      onClick={action}
      style={{ ...customStyles }}
    >
      {children}
    </button>
  );
};

export default UNCButton;
