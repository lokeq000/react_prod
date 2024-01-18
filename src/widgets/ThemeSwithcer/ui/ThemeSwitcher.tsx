import { Theme, useTheme } from "app/rpoviders/ThemeProvider";
import cls from "./ThemeSwitcher.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import LightIcon from  'shared/assets/icons/theme-light.svg'
import DarkIcon from  'shared/assets/icons/theme-dark.svg'
import { Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProops {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProops) => {
  const { theme, toggleTheme } = useTheme();
  return  (
    <Button 
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}  
    > {theme === Theme.DARK ? <DarkIcon /> :  <LightIcon  />}
    </Button>
  )
}