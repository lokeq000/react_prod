import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
  title: 'shared/LangSwitcher',
  component: LangSwitcher,

  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

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
