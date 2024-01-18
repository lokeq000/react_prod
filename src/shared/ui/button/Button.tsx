import { ButtonHTMLAttributes, Children, FC } from "react"
import cls from "./Button.module.scss"
import { classNames } from "shared/lib/classNames/classNames"

export enum ThemeBtn {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeBtn
}

export const Button: FC<ButtonProps> = (props) => {
  const  { className, children, theme = 'clear', ...otherProps } = props;
  return  (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    > {children}
    </button>
  )
}