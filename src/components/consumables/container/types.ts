export interface IContainerProps extends React.CSSProperties {
  children: any;
  place?: string;
  type:
    | "leadingHorizontal"
    | "leadingVertical"
    | "trailingHorizontal"
    | "trailingVertical"
    | "centerHorizontal"
    | "centerVertical"
    | "evenHorizontal"
    | "evenVertical";
  customStyles?: { [key: string]: React.CSSProperties };
  extraClass?: string;
}
