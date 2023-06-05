import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/constants';
import GlobalStyles from '../src/GlobalStyles';

const ThemeDecorator = (Story, context) => {
  const theme = context.parameters.theme || context.globals.theme
  const storyTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
};

export default ThemeDecorator;
