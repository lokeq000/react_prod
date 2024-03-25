import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProops {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProops) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input placeholder={t('Логин')} type="text" className={cls.form_item} />
      <Input placeholder={t('Пароль')} type="text" className={cls.form_item} />
      <Button className={cls.btn}>
        {t('Войти')}
      </Button>
    </div>
  );
};
