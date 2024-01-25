import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export function renderWithTranslation(Component: ReactNode) {
  return render(
    <I18nextProvider i18n={i18nForTest}>
      {Component}
    </I18nextProvider>,
  );
}
