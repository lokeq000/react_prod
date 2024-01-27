import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,

  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof PageError>;

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
