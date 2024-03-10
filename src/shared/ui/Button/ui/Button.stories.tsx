import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ThemeBtn } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  decorators: [
    // ThemeDecorator(Theme.LIGHT),
    (Story) => (
      <div className="app dark" style={{ border: '10px solid black' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: { control: ThemeBtn.CLEAR },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const clear: Story = {
  args: {
    theme: ThemeBtn.CLEAR,
    children: 'test',
  },
};

export const primary: Story = {
  args: {
    theme: ThemeBtn.PRIMARY,
    children: 'test',
  },
};

export const secondary: Story = {
  args: {
    theme: ThemeBtn.SECONDARY,
    children: 'test',
  },
};

export const square: Story = {
  args: {
    children: '>',
    square: true,
    theme: ThemeBtn.BACKGROUND_INVERTED,
  },
};

export const squareL: Story = {
  args: {
    square: true,
    children: '>',
    size: ButtonSize.L,
    theme: ThemeBtn.BACKGROUND_INVERTED,
  },
};

export const squareXL: Story = {
  args: {
    square: true,
    children: '>',
    size: ButtonSize.XL,
    theme: ThemeBtn.BACKGROUND_INVERTED,
  },
};

export const background: Story = {
  args: {
    children: 'test',
    theme: ThemeBtn.BACKGROUND,
  },
};

export const backgroundInverted: Story = {
  args: {
    theme: ThemeBtn.BACKGROUND_INVERTED,
    children: 'test',
    square: true,
  },
};
