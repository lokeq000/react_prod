import './styles/index.scss'
import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "./rpoviders/ThemeProvider"
import { AppRouter } from './rpoviders/router'
import { NavBar } from 'widgets/NavBar'

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <button onClick={toggleTheme}>TOGGLE</button>
      <AppRouter />
    </div>
  )
}
