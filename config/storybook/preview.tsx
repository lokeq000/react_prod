import type { Preview } from "@storybook/react";
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '../../src/app/rpoviders/ThemeProvider/index'
import React from "react";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    decorators: [
      StyleDecorator,
      // ThemeDecorator(Theme.LIGHT),
      (Story) => (
        <div className="app dark" style={{border: '10px solid black'}}>aaaa <Story /></div>
      )
    ],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
console.log(StyleDecorator, 'StyleDecorator');
console.log(ThemeDecorator(Theme.LIGHT));
export default preview;

