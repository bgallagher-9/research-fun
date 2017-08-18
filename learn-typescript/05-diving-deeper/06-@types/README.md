# @types

As of Typescript 2.0 you do not need a separate tool like [TSD](https://github.com/DefinitelyTyped/tsd) or [Typings](https://github.com/typings/typings) to get type definitions for well known projects.  Type definitions from Definitely Typed ([there are 1000's](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types)) are published to npm as `@types/[package]` ie if you are using lodash then `npm install --save-dev @types/lodash`.

Simply by having package `x` and `@types/x` Typescript will automatically grab the type definitions when using the package.

# Exercise
- Change to this directory and do an `npm install`
- This project has one file `index.ts` that uses lodash, but lodash hasn't been installed yet.
- Goal: get the project to build without any errors by installing lodash and its type definitions.

## Hints
- The project's typescript configuration is already done in `tsconfig.json` just run `npm run build` to run the typescript compiler with those settings.
