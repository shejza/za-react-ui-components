## ZA React UI Components

A comprehensive React UI component library built with **styled-components** and **Storybook**. This library provides a collection of reusable, customizable UI components designed for modern web applications.

### �� **What it does:**
- **Component Library**: Offers 15+ pre-built React components including Button, Card, Grid, Icon, Alert, Accordion, Carousel, Menu, Select, MultiSelect, and more
- **Icon System**: Includes 100+ custom SVG icons and supports multiple icon libraries (Feather, Heroicons, Material Design, etc.)
- **Theme Support**: Built-in light and dark theme support
- **Storybook Integration**: Complete documentation and interactive component playground
- **TypeScript Ready**: Components are designed to work with TypeScript projects
- **Customizable**: All components are highly customizable through props and styled-components

### �� **Key Features:**
- **Modern Stack**: React 17, styled-components, Storybook
- **Build System**: Rollup configuration for multiple output formats (CJS, ESM, UMD)
- **Development Tools**: ESLint, testing setup, component generation scripts
- **Deployment Ready**: Netlify deployment configuration for Storybook docs

Perfect for developers who want to quickly bootstrap consistent UI components in their React projects or create their own design system foundation.

## Getting started

### Install dependencies
On a terminal window run `npm install`

### live development with storybook

On the terminal run `npm run storybook`, after building this should open a new tab on your default browser where you can interact with the component stories.

## Available Scripts

In the project directory, you can run:


### generate <component-name>
Used as `npm run YOUR_COMPONENT_NAME` will generate a folder, a .jsx and a .stories.jsx version of the provided component name.

### build
`npm run build` Prepares a web ready version of the library under the public folder.

### storybook
`npm run storybook` uses the storybook framework to create a live preview app of the project.

### build-storybook
`npm run build-storybook` same as `build` but for the storybook preview app.

### lint
`npm run lint` does an analysis of the codebase using eslint and highlight violations of the style-guideline.


### lint-fix
`npm run lint-fix` similar to `lint` but whenever possible it will alter files to make them adhere to the style-guide.
