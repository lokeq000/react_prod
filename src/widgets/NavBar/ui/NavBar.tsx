import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeBtn } from 'shared/ui/Button';
import { useCallback, useState } from 'react';
import cls from './NavBar.module.scss';

interface NavbarProps {
  className?: string;
}

export const NavBar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const signBtnHandler = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onCloseModalHandler = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button onClick={signBtnHandler} theme={ThemeBtn.BACKGROUND} className={cls.links}>
        {t('Войти')}
      </Button>
      {/* <Modal
        isOpen={isAuthModal}
        onClose={onCloseModalHandler}
      >
      </Modal> */}
    </div>
  );
};
