import type { Preview } from '@storybook/react';
import React from 'react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    decorators: [
      StyleDecorator,
      // ThemeDecorator(Theme.LIGHT),
      (Story) => (
        <div className="app dark" style={{ border: '10px solid black' }}>
          <Story />
        </div>
      ),
    ],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export default preview;
