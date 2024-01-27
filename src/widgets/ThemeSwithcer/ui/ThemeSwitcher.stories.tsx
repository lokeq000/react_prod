import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,

  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
  args: {
  },
  decorators: [
    // ThemeDecorator(Theme.LIGHT),
    (Story) => (
      <div className="app light" style={{ border: '10px solid black' }}><Story /></div>
    ),
  ],
};

export const Dark: Story = {
  args: {
  },
  decorators: [
    // ThemeDecorator(Theme.LIGHT),
    (Story) => (
      <div className="app dark" style={{ border: '10px solid black' }}><Story /></div>
    ),
  ],
};
