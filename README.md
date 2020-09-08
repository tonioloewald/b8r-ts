# b8r-ts

Experimental port of the [bindinator](https://bindinator.com) core to TypeScript.
This is, in essence, all of `b8r` since the other stuff is simply vanilla-js libraries
and components.

## Progress
- transpiles (to single js file because tsc breaks ES6 import)
- rollup integrated (actually redundant at the moment)
- uglifies
- works perfectly

## To Do
- port unit tests
- try to eliminate all tsc 'strict' violations
- eliminate as many `// @ts-ignore`s as possible
- port `lib/test.js`
- port components
