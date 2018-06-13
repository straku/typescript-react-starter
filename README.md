# TypeScript starter

TypeScript + React starter project containing everything I need to develop simple apps (intended to be cloned by me or anyone who will find it helpful).

Based on fork of [Create React App](https://github.com/facebookincubator/create-react-app) for TypeScript [Create React App TypeScript](https://github.com/wmonk/create-react-app-typescript).

Removed all TSLint rules as they were pretty restrictive and I didn't have time (yet) to align it with [`eslint-config-react-app`](https://github.com/facebook/create-react-app/tree/next/packages/eslint-config-react-app) which in my opinion is perfect in that matter.

Contains concepts and libraries that I like to use:

- [`styled-components`](https://github.com/styled-components/styled-components) for styling
- redux concept without redux itself (global immutable state, reducer, actions, thunks, type safety, no `connect`), sprinkled with [`immer`](https://github.com/mweststrate/immer) for extremely simple reducers

With all of above and simple "counter" app weights at around `53 KB` gzipped.
