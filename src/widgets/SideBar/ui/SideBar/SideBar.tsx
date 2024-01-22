import { useState } from "react"
import cls from "./SideBar.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { ThemeSwitcher } from "widgets/ThemeSwithcer"
import { LangSwitcher } from "shared/ui/LangSwitcher"

interface SideBarProops {
  className?: string
}

export const SideBar = ({ className }: SideBarProops) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return  (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>ttoggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  )
}