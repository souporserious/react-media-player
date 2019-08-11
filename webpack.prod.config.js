var path    = require('path');
var webpack = require('webpack');
var banner  = require('./webpack.banner');
var TARGET  = process.env.TARGET || null;

var externals = {
  react: {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom'
  }
};

var config = {
  mode: 'production',
  entry: {
    index: './src/react-media-player.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'react-media-player.js',
    sourceMapFilename: 'react-media-player.sourcemap.js',
    library: 'ReactMediaPlayer',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{ test: /\.(js|jsx)/, use: 'babel-loader' }]
  },
  plugins: [new webpack.BannerPlugin(banner)],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: externals
};

if (TARGET === 'minify') {
  const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

  config.output.filename          = 'react-media-player.min.js';
  config.output.sourceMapFilename = 'react-media-player.min.js';
  config.optimization             = {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: false,
          mangle: true,
          ecma: 6,
        },
      })
    ]
  };
}

module.exports = config;
