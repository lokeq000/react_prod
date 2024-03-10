import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProops {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal = (props: PortalProops) => {
  const {
    children,
    element = document.body,
  } = props;
  return createPortal(children, element);
};
