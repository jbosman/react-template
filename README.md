# React Template

## Created by Joe Bosman

This is a template that can be used to quickly get up and running with React.

See the package.json file for a detailed list of the packages included.

## Getting Started

You must have Node and NPM installed.

Execute the following command to install all dependencies.

```
npm install
```

Execute the following command to create a development build which vite will serve.

```
npm run dev
```

Then open your browser and navigate to 'http://localhost:5173/'.

## Design Decisions

This section is intended to be beneficial for both me (the developer) and anyone using this package to learn more about js build tools.

From my perspective, as the developer, it helps to document the design decisions for two reasons. First by documenting and explaing what I"m doing, it forces me to make sure I understand the decisions and better solidify what I'm learning by having to clearly explain it. And second, when I haven't worked with the package in some time, I can easily get a refresh on why I made a particular descision. This can also be beneficial in the future when I'm thinking of changing or updating something.

### Prettier

Code formatter. I highly recommend installing the VS Code Prettier extension and set it up to only run when it detects a Prettier config file and run when files are saved.

To do that:

1. Open the VSCode Command Pallet.
2. Search for and select Preferences: Open User Settings (JSON).
3. Add the following settings:

```json
"editor.formatOnSave": true,
"prettier.requireConfig": true,
```

#### Configuration

Located in the '.prettierrc' file. The default configuration from prettier is used. This is specified with the empty object in the file.

## Packages

This section provides a high level overview of the packages used to build this template react application.

| Package                          | Description         | Notes                                                   |
| -------------------------------- | ------------------- | ------------------------------------------------------- |
| [Vite](https://vite.dev/)        | Build tool          | Frontend build tool for bundling.                       |
| [React](https://react.dev/) v19  | Frontend UI Library | Frontend UI library.                                    |
| [Prettier](https://prettier.io/) | Code Formatter      | Formats code consistently for anyone using the project. |
