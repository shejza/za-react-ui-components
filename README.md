# thc-ui-components

This project was bootstrapped with [Storybook](https://storybook.js.org/).

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