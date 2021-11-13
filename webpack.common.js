const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, '.env'),
});
const EncryptPlugin = require('ricochetjs').EncryptPlugin;
const Dotenv = require('dotenv-webpack');

const SECRET_KEY = process.env.RICOCHET_SITE_KEY;

if (!SECRET_KEY) {
  console.log('You must define a RICOCHET_SITE_KEY env variable');
  process.exit(-1);
}

module.exports = {
  entry: './src/index.js',
  target: 'node',
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'setup.js',
    library: {
      type: 'commonjs',
    },
  },
  plugins: [
    new Dotenv(), // Allow to use .env inside code
    new EncryptPlugin({
      key: SECRET_KEY,
    }),
  ],
};
