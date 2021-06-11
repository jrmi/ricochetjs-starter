# Ricochet-js project starter

This is a starter to be able to create the ricochet initialisation file.

See [Ricochet-js](https://github.com/jrmi/ricochetjs) documentation for more
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
previously generated key with ricochet-js.

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
npm run serve
```

## Customization

You can freely modify `src/index.js` file to declare your store, hooks, 
custom functions, ...

Remind that the build will be encrypted and should be used by ricochet server 
with corresponding configuration in `site.json` file.

Example of `site.json` file:

```js
{
  "siteId": {
    "name": "My example website",
    "key": "<generated key>",
    "emailFrom": "\"My test\" <no-reply@example.net>"
  }
}
```

Remember to also define a `SECRET` environment variable for the server
(Can be defined in same `.env` file if you start the server from here).

The server should be listening on `http://localhost:4000`.

## Test it with curl

To test test the script, the ricochet server should be started, you can use `curl`:

```sh
curl -X POST -H "Content-Type: application/json
X-Ricochet-Origin: http://localhost:9000" -d '{"some":"data"}' http://localhost:4000/siteId/store/publicData/
```