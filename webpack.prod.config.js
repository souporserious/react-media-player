var path = require('path');
var webpack = require('webpack');
var TARGET = process.env.TARGET || null;

var config = {
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
    loaders: [
      { test: /\.(js|jsx)/, loader: 'babel-loader', query: { presets: ['es2015', 'react', 'stage-0'] } },
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
};

if(TARGET === 'minify') {
  config.output.filename = 'react-media-player.min.js';
  config.output.sourceMapFilename = 'react-media-player.min.js';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: {
      except: ['React', 'ReactMediaPlayer']
    }
  }));
}

module.exports = config;
