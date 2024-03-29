import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { SideBar } from './SideBar';

const meta: Meta<typeof SideBar> = {
  title: 'widget/SideBar',
  component: SideBar,

  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof SideBar>;

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
