import type { Meta, StoryObj } from '@storybook/react';

import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,

  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

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
