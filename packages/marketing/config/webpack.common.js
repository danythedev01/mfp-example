module.exports = {
  module: {
    rules: [
      //loader: its goal is to tell webpack to process some different files as we start to import them to our project
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
              // jsx, transform code to things like es2025 syntax and so on, and convert them to es5
              presets: ['@babel/preset-react','@babel/preset-env'],
              // add a little bit of aditional code to enable some features like async/await syntax
              plugins: ['@babel/plugin-transform-runtime'],
          }
        }
      }
    ]
  }
};
