import type { Meta, StoryObj } from '@storybook/react';

import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,

  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
  args: {
  },
  decorators: [
    (Story) => (
      <div className="app light" style={{ border: '10px solid black' }}><Story /></div>
    ),
  ],
};

export const Dark: Story = {
  args: {
  },
  decorators: [
    (Story) => (
      <div className="app dark" style={{ border: '10px solid black' }}><Story /></div>
    ),
  ],
};
