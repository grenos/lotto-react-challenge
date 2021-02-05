export interface IHeaderProps extends React.CSSProperties {
  children: any;
  type: "xl" | "l" | "m" | "s";
  customStyles?: { [key: string]: React.CSSProperties };
  bold?: Boolean;
}
