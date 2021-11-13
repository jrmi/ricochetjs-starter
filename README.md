# Ricochet-js project starter

This is a starter to be able to create the ricochet initialisation file.

See [Ricochet.js](https://github.com/jrmi/ricochetjs) documentation for more
information on this repository.

You can use `degit` to make your own copy of this repository:

```sh
npx degit https://github.com/jrmi/ricochetjs-starter
```

## Usage

First install dependencies:

```sh
npm install
```

Create a `.env` file from the `.env.dist` file and customize it by adding your
previously generated key with Ricochet.js.

then you can build the package by executing:

```sh
npm run build
```

Yes, that's true, you are bundling the server code with webpack. This code should
be deployed on any content server and can (should?) be deployed alongside with
your frontend code.

You may also want to watch for code changes:

```sh
npm run watch
```

or even serve the build and watch for code changes:

```sh
npm run dev
```

If you want your backend be accessible by an external Ricochet.js instance, you
also can start a tunnel provided by [localtunnel](https://github.com/localtunnel/localtunnel).

```sh
npm run tunnel # Define a $TUNNEL_PREFIX env var to set fixed tunnel URL.
```

Now, you can call the API declared in your `setup.js` file.

## Test it with curl

To test test the script, the ricochet server should be started, you can use `curl`:

```sh
curl -X POST -H "Content-Type: application/json
X-Ricochet-Origin: http://localhost:9000" -d '{"some":"data"}' http://localhost:4000/siteId/store/publicData/
```

## Customization

You can freely modify `src/index.js` file to declare your store, hooks,
custom functions, ...

Remind that the build will be encrypted and must be used with the ricochet server
that issued the key.

Read the [Ricochet.js documentation](https://github.com/jrmi/ricochetjs) for more information.
