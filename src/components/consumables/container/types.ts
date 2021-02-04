import { CSSProperties } from "react";

export interface IButtonProps extends React.CSSProperties {
  children: any;
  backgroundcolor?: string;
  margin?: string;
  padding?: string;
  type:
    | "leadingHorizontal"
    | "leadingVertical"
    | "trailingHorizontal"
    | "trailingVertical"
    | "centerHorizontal"
    | "centerVertical"
    | "evenHorizontal"
    | "evenVertical";
  customStyles?: any;
}