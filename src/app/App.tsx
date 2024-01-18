import './styles/index.scss'
import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "./rpoviders/ThemeProvider"
import { AppRouter } from './rpoviders/router'

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>

      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}> Главная </Link>
      <Link to={'/about'}> Другое </Link>
      <AppRouter />
    </div>
  )
}
