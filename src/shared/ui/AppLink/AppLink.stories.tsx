import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,

  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Light: Story = {
  args: {
    children: 'test',
  },
  decorators: [
    // ThemeDecorator(Theme.LIGHT),
    (Story) => (
      <BrowserRouter><div className="app light" style={{ border: '10px solid black' }}><Story /></div></BrowserRouter>
    ),
  ],
};

export const Dark: Story = {
  args: {
    children: 'test',
  },
  decorators: [
    // ThemeDecorator(Theme.LIGHT),
    (Story) => (
      <BrowserRouter><div className="app dark" style={{ border: '10px solid black' }}><Story /></div></BrowserRouter>
    ),
  ],
};
