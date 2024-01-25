import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from 'shared/lib/classNames/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from './SideBar';

describe('Sidebar', () => {
  test('Render', () => {
    // eslint-disable-next-line i18next/no-literal-string
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    // eslint-disable-next-line i18next/no-literal-string
    renderWithTranslation(<SideBar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
