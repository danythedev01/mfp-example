const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
      },
      // shared: ['react', 'react-dom'],
      /* 
        {
          "@material-ui/core": "^4.11.0",
          "@material-ui/icons": "^4.9.1",
          "react": "^17.0.1",
          "react-dom": "^17.0.1",
          "react-router-dom": "^5.2.0"
        }
      */
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
