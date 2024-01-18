import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { routeConfig } from "shared/config/routerConfig/routerConfig"

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
          {Object.values(routeConfig).map(({ element, path }) => {
            <Route
              key={path}
              element={element}
            />
          })}
      </Routes>
    </Suspense>
  )
}
