import ThemeDecorator from "./ThemeDecorator";
import viewports from "./viewports";

export const decorators = [ThemeDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
