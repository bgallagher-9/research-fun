# JavaScript Features (with TypeScript)

Since TypeScript supports everything in the current ECMAScript specification, we're going to go over the existing JavaScript features quickly and transition to new features available in ES2015 and beyond, which are also supported in TypeScript. These features are all transpiled to ES5, while others not covered here need to target ES6 (this will be covered in a future chapter).

## Features

1. ES5 (current version) - `function`, `var`, array methods, etc.
2. `let` and `const`
3. Classes (Static, Public/Private, Property Types)
4. Arrow Functions
5. Template Strings
6. Object Literals
7. Destructuring
8. Default and Rest Parameters
9. Spread Operator
10. Iterators and `for..of`
11. Decorators


# Exercise
- Look at the feature described in each typescript file.
- Build using typescript's default target (ES3) ie `npm run build 03-javascript-features/01-es5.ts`
 - ES3 code will work in all browser environments including very old browsers that you probably aren't concerned with supporting
- Build using a more advanced target that will work in a node environment: ES2015 (aka ES6) `npm run build -- --target ES2015 03-javascript-features/01-es5.ts`


## Hints
- To understand this error:
```
03-javascript-features/01-es5.ts(2,1): error TS1148: Cannot compile modules unless the '--module' flag is provided.
03-javascript-features/01-es5.ts(2,21): error TS2307: Cannot find module 'typescript'.
```
 -  You must understand that that the typescript compiler doesn't know whether it's running in Node or the browser.  The browser doesn't have node's CommonJS module resolution (it can't `require('x')`).  You have to tell it how to resolve dependencies
 - `npm run build -- --module CommonJS 03-javascript-features/01-es5.ts`  (the `-- ...` is how you pass flags into the script that npm is running)
 - Compiler options like these --module and --target can be specified on the command line as well as in `tsconfig.json` (see next exercise)
