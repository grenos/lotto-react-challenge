export interface IButtonProps {
  children: String | SVGElement;
  type: "success" | "primary" | "clear";
  action: (event: React.MouseEvent<HTMLButtonElement>) => void;
  customStyles?: any;
}
