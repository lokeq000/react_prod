import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/rpoviders/ThemeProvider';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavbarProps {
  className?: string;
}

export const NavBar = ({ className }: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" className={cls.mainLink}> Главная </AppLink>
        <AppLink to="/about"> Другое </AppLink>
      </div>
    </div>
  );
};
