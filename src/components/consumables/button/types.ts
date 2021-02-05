export interface IButtonProps extends React.CSSProperties {
  children: String | SVGElement;
  type: "success" | "primary" | "clear";
  action: (event: React.MouseEvent<HTMLButtonElement>) => void;
  customStyles?: { [key: string]: React.CSSProperties };
}
