import { Theme } from 'app/rpoviders/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => any) => (
  <div className={`app ${theme}`}>
    {StoryComponent()}
  </div>
);
