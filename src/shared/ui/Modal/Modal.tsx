import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReactNode, createContext, useCallback, useEffect, useRef, useState,
} from 'react';
import { Theme } from 'app/rpoviders/ThemeProvider';
import { ThemeContextProps } from 'app/rpoviders/ThemeProvider/lib/ThemeContext';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

interface ModalProops {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  theme?: string;
}

export const Modal = (props: ModalProops) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    theme = Theme.LIGHT,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(timerRef.current);
    };
  }, [isOpen, onKeyDown]);
  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <div
          className={cls.overlay}
          onClick={closeHandler}
        >
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
