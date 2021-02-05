export interface ITextProps extends React.CSSProperties {
  children: any;
  type: "xs" | "l" | "m" | "s";
  customStyles?: { [key: string]: React.CSSProperties };
  bold?: Boolean;
}
