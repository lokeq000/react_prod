import './styles/index.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "./rpoviders/ThemeProvider"
import { AppRouter } from './rpoviders/router'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <div>
      <button onClick={toggleLang}>{t('Перевод')}</button>
    </div>
  )
}

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={''}>
        <Component />
        <NavBar />
        <div className='content-page'>
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
