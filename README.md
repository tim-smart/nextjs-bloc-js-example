# Bloc-js example

## How to use

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

This example shows how to integrate @bloc-js in Next.js.

It also uses Typescript for type safety.

It is pretty much a replica of the Redux example:
https://github.com/zeit/next.js/tree/master/examples/with-redux

## Gotchas

`@bloc-js` uses async generators to map events to state. Typescript and babel
implement these differently, so using the es5 code from Typescript results in
errors.

We can get around this by having `babel` from Next.js compile the ESNext code
directly. See `next.config.js` for how this is done!
