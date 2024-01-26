import type { Meta, StoryObj } from '@storybook/react';

import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
  title: 'widget/PageLoader',
  component: PageLoader,

  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {
  args: {
  },
  decorators: [
    // ThemeDecorator(Theme.LIGHT),
    (Story) => (
      <div className="app light" style={{border: '10px solid black'}}>aaaa <Story /></div>
    )
  ],
};

export const Dark: Story = {
  args: {
  },
  decorators: [
    // ThemeDecorator(Theme.LIGHT),
    (Story) => (
      <div className="app dark" style={{border: '10px solid black'}}>aaaa <Story /></div>
    ),
  ],
};