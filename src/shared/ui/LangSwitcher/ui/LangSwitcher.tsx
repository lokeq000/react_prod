import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeBtn } from 'shared/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProops {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProops) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ThemeBtn.CLEAR}
      onClick={toggleLang}
    >
      {short ? t('Язык').slice(0, 3) : t('Язык')}
    </Button>
  );
};
