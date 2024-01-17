import { Route, Routes } from "react-router-dom"
import './index.scss'
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { Link } from "react-router-dom"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { Suspense } from "react"

export const App = () => {
  return (
    <div className="app">
      <Link to={'/'}> Главная </Link>
      <Link to={'/about'}> Другое </Link>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
              <Route path={'/about'} element={<AboutPageAsync />} />
              <Route path={'/'} element={<MainPageAsync />} />
          </Routes>
        </Suspense>
    </div>
  )
}
