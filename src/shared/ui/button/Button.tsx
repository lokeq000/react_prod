import { ButtonHTMLAttributes, Children, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

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
  const {
    className, children, theme = 'clear', ...otherProps
  } = props;
  return (
    <button
      type="button"
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {' '}
      {children}
    </button>
  );
};
