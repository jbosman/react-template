# React Template
## Created by Joe Bosman
This is a template that can be used to quickly get up and running with React. 

See the package.json file for a detailed list of the packages included. 

From a high level it is a simple server that serves a single html file with a bundle.js script. The bundle.js file must first be built using webpack. See the Getting Started section to build the bundle.js file and launch the template website.

## Getting Started
You must have Node and NPM installed.

Execute the following command to install all dependencies.

```
npm install
```

Execute the following command to create a development build and launch the express server.

```
npm run dev
```


Then open your browser and navigate to 'localhost:3000'.

## Nitty Gritty Details

This section is intended to be beneficial for both me (the developer) and anyone using this package to learn more about js build tools.

From my perspective, as the developer, it helps to document the design decisions for two reasons. First by documenting and explaing what I"m doing, it forces me to make sure I understand the decisions and better solidify what I'm learning by having to clearly explain it. And second, when I haven't worked with the package in some time, I can easily get a refresh on why I made a particular descision. This can also be beneficial in the future when I'm thinking of changing or updating something.

### Webpack settings

 
| Setting  | Value | Notes |
| ------------- | ------------- | ------------- |
| entry  | client/react.index.js | This is where webpack starts digesting files and composing into a single file known as a bundle. Any files required to execute this entry will also be composed into the bundle file.  |
| output  | dist/bundle.js  | This is the location where webpack will write the bundle file too. |
| module | < various > | The module section allows for installation of 3rd party modules for compiling files which webpack encouters while composing the bundle file. Later sections will provide more details on the modules used in this project. |


