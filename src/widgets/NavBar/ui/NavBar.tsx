import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeBtn } from 'shared/ui/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUserName';
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
      <LoginModal onClose={onCloseModalHandler} isOpen={isAuthModal} />
    </div>
  );
};
