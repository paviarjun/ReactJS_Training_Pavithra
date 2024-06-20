const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundle file name
  },
  module: {
    rules: [
        {
          test: /\.js$/, // Apply this rule to .js files
          exclude: /node_modules/, // Don't apply to files residing in node_modules
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'], // Add @babel/preset-react here
            },
          },
        },
      ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Use this HTML file as a template
    }),
  ],
};