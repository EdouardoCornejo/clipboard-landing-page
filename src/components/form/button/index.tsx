import { FC } from "react";
import style from "./button.module.scss";

interface ButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: "primary" | "secondary";
}

export const Button: FC<ButtonComponentProps> = ({ color, text, ...props }) => (
  <button
    className={`${style.button} ${
      color === "primary" ? style.primary : style.secondary
    }`}
    {...props}
  >
    {text}
  </button>
);
