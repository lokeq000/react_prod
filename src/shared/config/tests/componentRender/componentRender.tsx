import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export interface ComponentRenderOpttions {
  route?: string;
}

export function ComponentRender(Component: ReactNode, options: ComponentRenderOpttions = {}) {
  const {
    route = '/',
  } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>
        {Component}
      </I18nextProvider>
    </MemoryRouter>,
  );
}
