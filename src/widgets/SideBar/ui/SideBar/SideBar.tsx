import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwithcer';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button, ThemeBtn } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import cls from './SideBar.module.scss';

interface SideBarProops {
  className?: string
}

export const SideBar = ({ className }: SideBarProops) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeBtn.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
