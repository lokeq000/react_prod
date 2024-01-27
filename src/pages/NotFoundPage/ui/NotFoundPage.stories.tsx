import type { Meta, StoryObj } from '@storybook/react';

import NotFoundPage from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,

  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

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
