import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderProops {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProops) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <span className="loader" />
  </div>
);
