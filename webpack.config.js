const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, './dist'), // eslint-disable-line no-undef
    publicPath: 'http://localhost:3000/',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    progress: true,
    hot: true,
    inline: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  mode: 'development',
};
