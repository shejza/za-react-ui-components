import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/constants';
import GlobalStyles from '../src/GlobalStyles';

const ThemeDecorator = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
);

export default ThemeDecorator;
