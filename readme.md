# GetWebpackPlugin
get the webpack runtime configuration

# Installation
```shell
  npm install --save-dev get-webpack-plugin
```
# Configuration
```js
  const { GetWebpackPlugin } = require('get-webpack-plugin');
  
  module.exports = {
    ...
    plugins: [
      new GetWebpackPlugin(),

      // Pass in Parameters to get the specified configuration items
      // new GetWebpackPlugin(name)
    ]
  }
```