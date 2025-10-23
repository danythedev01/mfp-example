const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [
          { loader: 'file-loader' }
        ],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss|\.css$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
      },
      //loader: its goal is to tell webpack to process some different files as we start to import them to our project
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
              // jsx, transform code to things like es2025 syntax and so on, and convert them to es5
              presets: ['@babel/preset-env'],
              // add a little bit of aditional code to enable some features like async/await syntax
              plugins: ['@babel/plugin-transform-runtime'],
          }
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
};
