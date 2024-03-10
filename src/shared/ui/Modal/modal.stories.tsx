import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,

  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: {
    children: 'test',
  },
  decorators: [
    (Story) => (
      <div className="app light" style={{ border: '10px solid black' }}><Story /></div>
    ),
  ],
};

export const Dark: Story = {
  args: {
    children: 'test',
  },
  decorators: [
    (Story) => (
      <div className="app dark" style={{ border: '10px solid black' }}><Story /></div>
    ),
  ],
};
