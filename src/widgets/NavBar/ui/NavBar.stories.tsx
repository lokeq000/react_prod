import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';
import type { Meta, StoryObj } from '@storybook/react';

import { NavBar } from './NavBar';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';
const meta: Meta<typeof NavBar> = {
  title: 'widget/NavBar',
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
      <BrowserRouter><div className="app light" style={{border: '10px solid black'}}>aaaa <Story /></div></ BrowserRouter>
    ),
  ],
};

export const Dark: Story = {
  args: {
  },
  decorators: [
    // ThemeDecorator(Theme.LIGHT),
    (Story) => (
      <BrowserRouter><div className="app dark" style={{border: '10px solid black'}}>aaaa <Story /></div></ BrowserRouter>
    ),
  ],
};