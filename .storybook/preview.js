import ThemeDecorator from "./ThemeDecorator";
import viewports from "./viewports";

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
}

export const decorators = [ThemeDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports },
  themes: {
    default: "light",
    list: [
      {name: 'light'},
      {name: 'dark'}
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
