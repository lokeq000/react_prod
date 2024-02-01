import { ButtonHTMLAttributes, Children, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeBtn {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  BACKGROUND= 'background',
  BACKGROUND_INVERTED= 'backgroundInverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeBtn;
  primary?: string;
  square?: boolean;
  size?: string;
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    children,
    theme = 'clear',
    square = false,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  const additional = [
    className,
    cls[theme],
    cls[size],
  ];

  console.log(additional, size);
  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, additional)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
