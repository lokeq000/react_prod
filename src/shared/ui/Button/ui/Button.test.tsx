import { render, screen } from '@testing-library/react';
import { Button, ThemeBtn } from './Button';

describe('Button', () => {
  test('Render', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Render with theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeBtn.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
