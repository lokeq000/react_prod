import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './rpoviders/router';
import { useTheme } from './rpoviders/ThemeProvider';

export const App = () => {
  const { theme } = useTheme();
  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error();
    }
  });

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
