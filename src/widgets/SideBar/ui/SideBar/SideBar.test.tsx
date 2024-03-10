import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/config/tests/componentRender/componentRender';
import { SideBar } from './SideBar';

describe('Sidebar', () => {
  test('Render', () => {
    // eslint-disable-next-line i18next/no-literal-string
    ComponentRender(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    // eslint-disable-next-line i18next/no-literal-string
    ComponentRender(<SideBar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
