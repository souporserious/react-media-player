var path = require('path');
var webpack = require('webpack');
var TARGET = process.env.TARGET || null;

var config = {
    entry: {
        index: './scripts/react-media-player.jsx'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: '[id].js',
        sourceMapFilename: '[id].sourcemap.js',
        library: '[id]',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)/, loader: 'babel?stage=0' }
        ]
    },
    plugins: [],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        'react': 'React'
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