## Description

This is a really simple TypeScript application that could be run with GraalVM's `js` command. 

The idea behind this sample app is to serve as a showcase for two dependencies:
- [@afterburnerhq/babel-plugin-graaljs-java-imports](https://github.com/AfterburnerHQ/babel-plugin-graaljs-java-imports) - a Babel plugin that allows importing Java classes/interfaces with the ES modules syntax

- [@afterburnerhq/java-types](https://github.com/AfterburnerHQ/java-types) - contains experimental Java `.d.ts` files generated specifically for usage in GraalJS

## Prerequisites
- `npm`
- `GraalVM`
    - Make sure `$GRAALVM` is configured and set in your OS's `PATH`
    - Make sure `js` is installed via `gu install js`

## Usage
The application could be run following these steps:
1. `npm i`
2. `npm start`


## Notes

You can play around with the `index.ts` in `src` but keep in mind all available Java `.d.ts` files are still experimental.

If you want to reuse the mentioned dependencies, have in mind the configurations in `.babelrc` and `tsconfig.json`.