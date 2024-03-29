import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'widgets/NavBar',
  component: NavBar,

  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Light: Story = {
  args: {
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
  },
  decorators: [
    // ThemeDecorator(Theme.LIGHT),
    (Story) => (
      <BrowserRouter><div className="app dark" style={{ border: '10px solid black' }}><Story /></div></BrowserRouter>
    ),
  ],
};
