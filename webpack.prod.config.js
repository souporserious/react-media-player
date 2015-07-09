var path = require('path');
var webpack = require('webpack');
var TARGET = process.env.TARGET || null;

var config = {
    entry: {
        index: './scripts/VelocityTransitionGroup.jsx'
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
            { test: /\.(js|jsx)/, loader: 'babel' }
        ]
    },
    plugins: [],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        'react/addons': 'React',
        'velocity-animate': 'Velocity',
        'velocity-animate/velocity.ui': 'velocity-animate/velocity.ui'
    },
};

if(TARGET === 'minify') {
    config.output.filename = 'VelocityTransitionGroup.min.js';
    config.output.sourceMapFilename = 'VelocityTransitionGroup.min.js';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        mangle: {
            except: ['React', 'Velocity', 'VelocityTransitionGroup']
        }
    }));
}

module.exports = config;